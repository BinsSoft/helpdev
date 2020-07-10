import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { isObject } from 'util';

@Component({
  selector: 'app-encodedecode',
  templateUrl: './encodedecode.component.html',
  styleUrls: ['./encodedecode.component.scss']
})
export class EncodedecodeComponent implements OnInit {
  uploadFileData:any = {};
  method: any = '';
  type: any = '';
  convertKeyWord: any = '';
  convertResult : any = '';
  options:any = {maxLines: 1000, printMargin: false};
  actionConfig:any= {};
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.method = params.method;
      this.type = params.type;
      this.setActionConfig({
        method:params.method,
        type : params.type,
        action:'encode-decode'
      })
      this.reset();
    });
  }
  setActionConfig(key, value=null){
    let config = this.actionConfig;
    if (isObject(key)) {
      Object.keys(key).map((i)=>{
        config[i] = key[i];
      })
    } else {
      config[key] = value;
    }
    this.actionConfig = config;
  }
  getResult(e) {
    if (e.inputText !=undefined) {
      this.convertKeyWord = e.inputText;
    }
    if (e.text!=undefined) {
      this.convertResult = e.text;
    }
    if (e.file != undefined) {
      this.uploadFileData = e.file;
      console.log(this.uploadFileData)
    }

  }
  ngOnInit() {
  }
 
  reset() {
    this.convertKeyWord = '';
    this.convertResult = '';
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
}
