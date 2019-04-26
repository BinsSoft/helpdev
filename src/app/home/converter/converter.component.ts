import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  converterText:any = '';
  converterType:any = '';
  convertResult:any = '';
  converterTypeData:any = [
    {"id":'b',"text":"Byte(B)"},
    {"id":'kb',"text":"Kilobyte(KB)"},
    {"id":'Mb',"text":"Megabyte(MB)"},
    {"id":'gb',"text":"Gigabyte(GB)"},
    {"id":'tb',"text":"Terabyte(TB)"}
  ]
  constructor() { }

  ngOnInit() {
  }

  convertDataSet() {
    switch(this.converterType) {
      case 1:
      this.convertResult = this.converterText.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join('');
      break;
    }
    
  }
}
