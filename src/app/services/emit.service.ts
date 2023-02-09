import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  errorEmitter: EventEmitter<any> = new EventEmitter<any>();
  fullScreenEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
}
