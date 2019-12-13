import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  private activeMenuSource = new BehaviorSubject<string>("");
  activeMenu = this.activeMenuSource.asObservable();


  setActiveMenu(menu: string) {
		this.activeMenuSource.next(menu);
  }
}
