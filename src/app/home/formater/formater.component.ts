import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as beautify from 'js-beautify';
import { isObject } from 'util';
import {EmitService} from '../../services/emit.service';
@Component({
  selector: 'app-formater',
  templateUrl: './formater.component.html',
  styleUrls: ['./formater.component.scss']
})
export class FormaterComponent implements OnInit, AfterViewInit {

  // @ViewChild('editor', {static: false}) editor;
  method: any = '';
  type: any = '';
  viewMode: any = '';
  convertKeyWord: any = '';
  convertResult: any = '';
  jsonResultData: any = {};
  language: any = {
    'js': 'javascript',
    'css': 'css',
    'json': 'json',
    'html': 'html'
  };
  selectedLanguage: any = '';
  errorData: any = {
    json: null
  };

  actionConfig: any = {};
  options: any = {
    'lineNumbers': true,
    'contextmenu': false,
    'minimap': {
      'enabled': false
    }
  };
  dependencies: string[] = [
    '@types/node',
    '@ngstack/translate',
    '@ngstack/code-editor'
  ];
  fullScreen = false;
  constructor(private activatedRoute: ActivatedRoute,
              private emitService: EmitService) {
    this.activatedRoute.params.subscribe((params) => {
      this.method = params.method;
      this.type = params.ext;
      this.selectedLanguage = this.language[this.type];
      this.setActionConfig({
        method: params.method,
        type : params.ext,
        action: 'format'
      });
      this.reset();
    });

    this.emitService.errorEmitter.subscribe((e) => {
      if (e) {
        if (e.JSON) {
          this.errorData.json = e.JSON;
        }
      }
    });
    this.emitService.fullScreenEmitter.subscribe(e => {
      if (e != undefined || e != null) {
        this.fullScreen = e;
        this.openModalDialog();
      }
    });
  }
  modalDialogConfig: any = {};
  openModalDialog() {
    this.modalDialogConfig = {};
    this.modalDialogConfig['title'] = 'Simple Modal';
    this.modalDialogConfig['type'] = 'M';
    this.modalDialogConfig['strict'] = true;
  }
  setActionConfig(key, value= null) {
    const config = this.actionConfig;
    if (isObject(key)) {
      Object.keys(key).map((i) => {
        config[i] = key[i];
      });
    } else {
      config[key] = value;
    }
    this.actionConfig = config;
  }
  getResult(e) {
    if (e.inputText != undefined) {
      this.convertKeyWord = e.inputText;
    }
    if (e.text != undefined) {
      this.convertResult = e.text;
    }
    if (e.json != undefined) {
      this.jsonResultData = e.json;
    }
    if (e.mode != undefined) {
      this.viewMode = e.mode;
    }
    if (e.error != undefined) {
      this.errorData = e.error;
    }
  }

  reset() {
    this.convertKeyWord = '';
    this.convertResult = '';
    this.jsonResultData = {};
    this.errorData = {
      json: null
    };
  }

  ngAfterViewInit() {

  }
  ngOnInit() {

  }
  onCodeChanged(e) {
    this.convertKeyWord = e;
  }

}
