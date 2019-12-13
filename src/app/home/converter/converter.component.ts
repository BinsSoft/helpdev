import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  converterText: any = '';
  converterType: any = '';
  convertResult: any = '';
  converterTypeData: any = {
    "data-size": [
      { "id": 'b', "text": "Byte(B)" },
      { "id": 'kb', "text": "Kilobyte(KB)" },
      { "id": 'Mb', "text": "Megabyte(MB)" },
      { "id": 'gb', "text": "Gigabyte(GB)" },
      { "id": 'tb', "text": "Terabyte(TB)" }
    ]
  };
  convertForm = {
    "value":"",
    "from":null,
    "to":null,
    "submit": false
  }
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.converterType = params.method;
    });
  }

  ngOnInit() {
    console.log(this.converterType);
  }

  convertAction() {
    let error = 0;
    this.convertForm.submit = true;
    if (!this.convertForm.value || !this.convertForm.from || !this.convertForm.to) {
      error = 1;
    }
    if (error == 0) {

    }
  }
  
}
