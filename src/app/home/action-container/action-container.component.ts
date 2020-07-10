import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import * as beautify from "js-beautify";
import {Md5} from 'ts-md5/dist/md5';
import { sha256, sha224 } from 'js-sha256';
@Component({
  selector: 'app-action-container',
  templateUrl: './action-container.component.html',
  styleUrls: ['./action-container.component.scss']
})
export class ActionContainerComponent implements OnInit {
  @ViewChild('uploadFile', {static: false}) uploadFile:ElementRef;
  @Input('config')config = {
    method:'',
    type:''
  };
  @Input('inputText')inputText = null;
  @Output('result')result = new EventEmitter();
  resultText:any = null;
  jsonResultData:any = {};
  method:any = null;
  type:any = null;
  errorData:any = {};
  beautyfyOption: any = {
    "indent_size": "4",
    "indent_char": " ",
    "max_preserve_newlines": "0",
    "preserve_newlines": true,
    "keep_array_indentation": false,
    "break_chained_methods": false,
    "indent_scripts": "keep",
    "brace_style": "none",
    "space_before_conditional": true,
    "unescape_strings": false,
    "jslint_happy": false,
    "end_with_newline": false,
    "wrap_line_length": "0",
    "indent_inner_html": false,
    "comma_first": false,
    "e4x": false,
    "indent_empty_lines": false
  }
  constructor() { }

  ngOnInit() {
    
  }
  convert() {
    if (this.config['action'] == 'format') {
      this.convertFormatData();
    }
    else if (this.config['action'] == 'encode-decode') {
      this.convertEncodeDecode();
    }
  }
  reset() {
    this.result.emit({
      inputText:'',
      text: '',
      json:{},
      error : {
        json: null
      }
    });
    this.jsonResultData = {};
    this.resultText = '';
  }

  convertEncodeDecode () {
    this.method = this.config['method'];
    this.type = this.config['type'];
    if (this.method == 'encode' && this.type == 'base64') {
      this.resultText = btoa(this.inputText);
    } else if (this.method == 'decode'  && this.type == 'base64') {
      this.resultText = atob(this.inputText);
    }
    else if (this.method == 'encode'  && this.type == 'md5') {
      this.resultText = Md5.hashStr(this.inputText);
    }
    else if (this.method == 'encode'  && this.type == 'sha256') {
      this.resultText = sha256(this.inputText);
    }
    else if (this.method == 'encode'  && this.type == 'SHA224') {
      this.resultText = sha224(this.inputText);
    }
    else if (this.method == 'encode'  && this.type == 'url') {
      this.resultText = encodeURIComponent(this.inputText);
    }
    else if (this.method == 'decode'  && this.type == 'url') {
      this.resultText = decodeURIComponent(this.inputText);
    }
    else if (this.method == 'encode'  && this.type == 'base64-file') {
      let file = this.uploadFile.nativeElement.files;
      if (file.length > 0) {
        file = file[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  ()=> {
          this.resultText = reader.result;
          this.result.emit({
            text: this.resultText
          });
        };
      }
    }
    if (this.type != 'base64-file') {
      this.result.emit({
        text: this.resultText
      });
    }
    
  }
  convertFormatData() {
    try {
      this.errorData = {
        json: null
      }
      this.jsonResultData = {};
      this.resultText = '';
      this.method = this.config['method'];
      this.type = this.config['type'];
      if (this.method == 'beautify' && this.type == 'json') {
        this.jsonResultData = JSON.parse(this.inputText);
        this.resultText = JSON.stringify(JSON.parse(this.inputText),null, 4);
      }
      else if (this.method == 'minify' && this.type == 'json') {
        this.resultText = JSON.stringify(JSON.parse(this.inputText));
      }
      else if (this.method == 'beautify' && this.type == 'js') {
        this.resultText = beautify.js(this.inputText, this.beautyfyOption);
      }
      else if (this.method == 'beautify' && this.type == 'css') {
        this.resultText = beautify.css(this.inputText, this.beautyfyOption);
      }
      else if (this.method == 'beautify' && this.type == 'html') {
        this.resultText = beautify.html(this.inputText, this.beautyfyOption);
      }
      else if (this.method == 'minify') {
        this.resultText = this.inputText.replace(/\s\s+/g, " ");
        this.resultText = this.resultText.replace(/\n+/g, "");
      }
      this.result.emit({
        text: this.resultText,
        json:this.jsonResultData
      });
    } catch (e) {
      console.log(e);
      if (this.type == 'json') {
        this.errorData.json = 'Check the json data. It is not a correct json';
      }
    }
  }
  setViewMode(mode) {
    this.config['viewMode'] = mode;
    this.result.emit({
      mode: mode
    });
  }

  download() {
    if (this.resultText) {

      var textToWrite = this.resultText; //Your text input;
      var textFileAsBlob = new Blob([textToWrite], {type:this.type});
      var fileNameToSaveAs = "download."+this.type;
  
      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "Download File";
      if (window['webkitURL'] != null)
      {
          // Chrome allows the link to be clicked
          // without actually adding it to the DOM.
          downloadLink.href = window['webkitURL'].createObjectURL(textFileAsBlob);
      }
      else
      {
          // Firefox requires the link to be added to the DOM
          // before it can be clicked.
          downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
         // downloadLink.onclick = destroyClickedElement;
          downloadLink.style.display = "none";
          document.body.appendChild(downloadLink);
      }
  
      downloadLink.click();
    }
  }

  copy() {
    var elm = document.getElementById("resultContent");
    if (window.getSelection) {
      // other browsers
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(elm);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
    }
  }
  selectFile() {
    this.uploadFile.nativeElement.click()
  }
  renderUploadedFile(e) {
    let file = this.uploadFile.nativeElement.files;
    if (file.length > 0) {
      file = file[0];
      let isImage = (file.type.indexOf('image') > -1)?true:false
      var reader = new FileReader();
      reader.onload = () => {
        this.result.emit({
          inputText: reader.result,
          file: {
            name : file.name,
            isImage: isImage
          }
        })
      };
      if (isImage) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }
  }

}
