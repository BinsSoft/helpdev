import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-comparer',
  templateUrl: './comparer.component.html',
  styleUrls: ['./comparer.component.scss']
})
export class ComparerComponent implements OnInit {
  @ViewChild('uploadLeft', {static: false}) uploadLeft:ElementRef;
  @ViewChild('uploadRight', {static: false}) uploadRight:ElementRef;
  leftContent: any = "";
  rightContent: any = "";
  compareStatus:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  compare() {
    this.compareStatus = true;
  }
  reset() {
    this.compareStatus = false;
    this.leftContent = '';
    this.rightContent = '';
    this.uploadLeft.nativeElement.value = null;
    this.uploadRight.nativeElement.value = null;
  }
  renderUploadedFile(e, side) {
    let file = e.target.files;
    if (file.length > 0) {
      file = file[0];
      let isImage = (file.type.indexOf('image') > -1)?true:false
      var reader = new FileReader();
      reader.onload = () => {
        if (side == 'left') {
          this.leftContent = reader.result;
        } else if (side == 'right') {
          this.rightContent = reader.result;
        }
      };
      reader.readAsText(file);
    }
  }

}
