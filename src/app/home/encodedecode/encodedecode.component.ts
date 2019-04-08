import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-encodedecode',
  templateUrl: './encodedecode.component.html',
  styleUrls: ['./encodedecode.component.scss']
})
export class EncodedecodeComponent implements OnInit {
  method: any = '';
  type: any = '';
  convertKeyWord: any = '';
  convertResult : any = '';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      this.method = params.method;
      this.type = params.type;
      this.reset();
    });
  }

  ngOnInit() {
  }
  convert () {
    if (this.method == 'encode' && this.type == 'base64') {
      this.convertResult = btoa(this.convertKeyWord);
    } else if (this.method == 'decode'  && this.type == 'base64') {
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
