import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Md5} from 'ts-md5/dist/md5';
import { sha256, sha224 } from 'js-sha256';
@Component({
  selector: 'app-encodedecode',
  templateUrl: './encodedecode.component.html',
  styleUrls: ['./encodedecode.component.scss']
})
export class EncodedecodeComponent implements OnInit {
  @ViewChild('uploadFile')uploadFile;
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
    else if (this.method == 'encode'  && this.type == 'md5') {
      this.convertResult = Md5.hashStr(this.convertKeyWord);
    }
    else if (this.method == 'encode'  && this.type == 'sha256') {
      this.convertResult = sha256(this.convertKeyWord);
    }
    else if (this.method == 'encode'  && this.type == 'SHA224') {
      this.convertResult = sha224(this.convertKeyWord);
    }
    else if (this.method == 'encode'  && this.type == 'url') {
      this.convertResult = encodeURIComponent(this.convertKeyWord);
    }
    else if (this.method == 'decode'  && this.type == 'url') {
      this.convertResult = decodeURIComponent(this.convertKeyWord);
    }
    else if (this.method == 'encode'  && this.type == 'base64-file') {
      let file = this.uploadFile.nativeElement.files;
      if (file.length > 0) {
        file = file[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  ()=> {
          this.convertResult = reader.result;
        };
      }
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
