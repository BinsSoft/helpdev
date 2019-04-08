import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-base64',
  templateUrl: './base64.component.html',
  styleUrls: ['./base64.component.scss']
})
export class Base64Component implements OnInit {
  type: any = '';
  convertKeyWord: any = '';
  convertResult : any = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.type = params.type;
      this.reset();
    });
  }

  ngOnInit() {
    
  }

  convert () {
    if (this.type == 'encode') {
      this.convertResult = btoa(this.convertKeyWord);
    } else if (this.type == 'decode') {
      this.convertResult = atob(this.convertKeyWord);
    }
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