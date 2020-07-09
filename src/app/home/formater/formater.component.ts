import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as beautify from "js-beautify";
@Component({
  selector: 'app-formater',
  templateUrl: './formater.component.html',
  styleUrls: ['./formater.component.scss']
})
export class FormaterComponent implements OnInit, AfterViewInit {
  @ViewChild('uploadFile', {static: false}) uploadFile;
  // @ViewChild('editor', {static: false}) editor;
  method: any = '';
  type: any = '';
  convertKeyWord: any = '';
  convertResult: any = '';
  jsonResultData: any = {};
  language:any = {
    "js":"javascript",
    "css":"css",
    "json":"json",
    "html":"html"
  };
  selectedLanguage:any = '';
  errorData: any = {
    json: null
  }
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
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.method = params.method;
      this.type = params.ext;
      this.selectedLanguage = this.language[this.type];
      this.reset();
    });
    
  }
  ngAfterViewInit() {

  }
  ngOnInit() {

  }
  onCodeChanged(e) {
    this.convertKeyWord = e;
  }
  options:any = {
    "lineNumbers": true,
    "contextmenu": false,
    "minimap": {
      "enabled": false
    }
  }
  dependencies: string[] = [
    '@types/node',
    '@ngstack/translate', 
    '@ngstack/code-editor'
  ];
  convert() {
    try {
      this.errorData = {
        json: null
      }
      this.jsonResultData = {};
      this.convertResult = '';

      if (this.method == 'beautify' && this.type == 'json') {
        this.jsonResultData = JSON.parse(this.convertKeyWord);
        this.convertResult = JSON.stringify(JSON.parse(this.convertKeyWord),null, 4);
      }
      else if (this.method == 'minify' && this.type == 'json') {
        this.convertResult = JSON.stringify(JSON.parse(this.convertKeyWord));
      }
      else if (this.method == 'beautify' && this.type == 'js') {
        this.convertResult = beautify.js(this.convertKeyWord, this.beautyfyOption);
      }
      else if (this.method == 'beautify' && this.type == 'css') {
        this.convertResult = beautify.css(this.convertKeyWord, this.beautyfyOption);
      }
      else if (this.method == 'beautify' && this.type == 'html') {
        this.convertResult = beautify.html(this.convertKeyWord, this.beautyfyOption);
      }
      else if (this.method == 'minify') {
        this.convertResult = this.convertKeyWord.replace(/\s\s+/g, " ");
        this.convertResult = this.convertResult.replace(/\n+/g, "");
      }
    } catch (e) {
      console.log(e);
      if (this.type == 'json') {
        this.errorData.json = 'Check the json data. It is not a correct json';
      }
    }
  }

  reset() {
    this.convertKeyWord = '';
    this.convertResult = '';
    this.jsonResultData = {};
    this.errorData = {
      json: null
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

  renderUploadedFile(e) {
    let file = this.uploadFile.nativeElement.files;
    if (file.length > 0) {
      file = file[0];
      var reader = new FileReader();
      reader.onload = () => {
        this.convertKeyWord = reader.result;
      };
      reader.readAsText(file);
    }
  }
  download() {
    if (this.convertResult) {

      var textToWrite = this.convertResult; //Your text input;
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
}
