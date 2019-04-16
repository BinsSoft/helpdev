import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-formater',
  templateUrl: './formater.component.html',
  styleUrls: ['./formater.component.scss']
})
export class FormaterComponent implements OnInit {
  @ViewChild('uploadFile')uploadFile;
  method: any = '';
  type: any = '';
  convertKeyWord: any = '';
  convertResult : any = '';
  jsonResultData:any = {};
  errorData :any = {
    json : null
  }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.method = params.method;
      this.type = params.ext;
    });
  }
  ngOnInit() {
  }

  convert() {
    try {
      this.errorData= {
        json : null
      }
      this.jsonResultData = {};
      this.convertResult = '';

      if (this.method == 'beautify' && this.type == 'json') {
        this.jsonResultData = JSON.parse(this.convertKeyWord);
      }
      else if (this.method == 'minify' && this.type == 'json') {
        this.convertResult = JSON.stringify(JSON.parse(this.convertKeyWord));
      }
      this.errorData= {
        json : null
      }
    } catch(e) {
      if (this.type == 'json') {
        this.errorData.json = 'Check the json data. It is not a correct json';
      }
    } 
  }

  reset () {
    this.convertKeyWord = '';
    this.convertResult = '';
    this.jsonResultData= {};
    this.errorData= {
      json : null
    }
  }

  copy() {
    var elm = document.getElementById("resultContent");
    if(window.getSelection) {
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
      reader.onload =  ()=> {
        this.convertKeyWord = reader.result;
      };
      reader.readAsText(file);
    }
  }
}
