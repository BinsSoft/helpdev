import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  activeMenu: any = '';
  heading: any = '';
  constructor(private commonService: CommonService, private route: Router) {
    this.route.events.subscribe((event) => {
      
      if (event instanceof NavigationEnd) {
        switch(route.url) {
          case "/hash/encode/base64":
          this.activeMenu = 'base64';
          this.heading = 'Base64 Encoding';
          break;
          case "/hash/decode/base64":
          this.activeMenu = 'base64';
          this.heading = 'Base64 Decoding';
          break;
          case "/hash/encode/md5":
          this.activeMenu = 'md5';
          this.heading = 'md5 Hash';
          break;
        }
      }
    })
  }

  ngOnInit() {
  }

  setActiveMenu(menuName) {
    if (this.activeMenu && this.activeMenu == menuName) {
      this.activeMenu = '';
    } else {
      this.activeMenu = menuName;
      this.commonService.setActiveMenu(this.activeMenu);
    }

  }
  changeOfRoutes() {
    console.log('sss');
    this.commonService.setActiveMenu('');
  }
}
