import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as timezone from './timezoneList';
@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {

  currentTimeStamp : any = null;
  timezoneList: Array<any> = [];
  timeData: any = {
    utcTime :null,
    clientTime: null
  }
  constructor() { }

  ngOnInit() {
    this.timezoneList = timezone.timezonelist;
    this.currentTimeStamp = moment().unix();
    this.setDateTime();
  }

  setDateTime() {
    let timestamp = this.currentTimeStamp*1000;

    this.timeData.utcTime = moment(timestamp).utc().format('dddd, MMMM Do YYYY, h:mm:ss a');

    var offset = moment.parseZone(timestamp).utcOffset();
    this.timeData.clientTime = moment(timestamp).utcOffset(offset).format('dddd, MMMM Do YYYY, h:mm:ss a');

  }

}
