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
  heading: any = 'HelpHub';
  constructor(private commonService: CommonService, private route: Router) {
    this.route.events.subscribe((event) => {
      
      if (event instanceof NavigationEnd) {
        let encodeDecodeUrlStatus = route.url.indexOf('/hash/');
        if (encodeDecodeUrlStatus > -1) {
          this.activeMenu = 'encode_decode';
        }
        else if(route.url.indexOf('/timestamp')>-1) {
          this.activeMenu = 'timestamp';
        }
        else if(route.url.indexOf('/comparer')>-1) {
          this.activeMenu = 'comparer';
        }
        else if(route.url.indexOf('/format')>-1) {
          this.activeMenu = 'format';
        }
        else if(route.url.indexOf('/converter')>-1) {
          this.activeMenu = 'converter';
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
