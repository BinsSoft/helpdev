/*
only accepted keys 
0-9
delete
backspace
copy + paste
up key
down key
left key
right key
*/ 
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlynumaricinput]'
})
export class OnlynumaricinputDirective {

  constructor() { }
  @HostListener('keydown', ['$event']) onKeyDown(e) {
    
    if (
      (e.keyCode >=48 && e.keyCode <= 57) || 
      (e.keyCode >=96 && e.keyCode <= 105) || 
      e.keyCode == 8 || 
      e.keyCode == 46 || 
      e.keyCode == 9 || 
      (e.ctrlKey == true && e.keyCode == 67 ) || 
      (e.ctrlKey == true && e.keyCode == 86 ) || 
      (e.keyCode >=37 && e.keyCode <= 40)  ) {
      return true;
    } else {
      e.preventDefault();
    }
  }
  @HostListener('keyup', ['$event']) onKeyUp(e) {
    if ((e.ctrlKey == true && e.keyCode == 86 )  ) {
      let text = e.target.value.replace(/\D/g, '');
      e.target.value = text;
    }
  }
}
