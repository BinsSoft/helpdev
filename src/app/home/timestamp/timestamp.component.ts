import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as timezone from './timezoneList';
import momenttimezone from 'moment-timezone';
@Component({
  selector: 'app-timestamp',
  templateUrl: './timestamp.component.html',
  styleUrls: ['./timestamp.component.scss']
})
export class TimestampComponent implements OnInit {

  currentTimeStamp: any = null;
  currentTimeZone: any = null;
  timezoneList: Array<any> = [];
  currentTimeData: any = {
    year: null,
    month: null,
    day: null,
    hour: null,
    min: null,
    sec: null
  };
  timeData: any = {
    timestamp: null,
    utcTime: null,
    clientTime: null,
    timeZoneTime: null
  }
  constructor() { }

  ngOnInit() {
    this.currentTimeZone = momenttimezone.tz.guess();
    this.timezoneList = timezone.timezonelist;
    this.currentTimeStamp = moment().unix();
    this.setDateTime();
    this.changeTimezone();

    this.currentTimeData = {
      year: moment().format('YYYY'),
      month: moment().format('MM'),
      day: moment().format('DD'),
      hour: moment().format('HH'),
      min: moment().format('mm'),
      sec: moment().format('ss')
    }
    this.getTimeStampFromDate();
  }

  getTimeStampFromDate() {
    this.timeData.timestamp = moment(this.currentTimeData.year + '-' + this.currentTimeData.month + '-' + this.currentTimeData.day + ' ' + this.currentTimeData.hour + ':' + this.currentTimeData.min + ':' + this.currentTimeData.sec).unix();
  }

  setDateTime() {
    let timestamp = this.currentTimeStamp * 1000;

    this.timeData.utcTime = moment(timestamp).utc().format('dddd, MMMM Do YYYY, h:mm:ss a');

    var offset = moment.parseZone(timestamp).utcOffset();
    this.timeData.clientTime = moment(timestamp).utcOffset(offset).format('dddd, MMMM Do YYYY, h:mm:ss a');

  }

  changeTimezone() {
    let timestamp = this.currentTimeStamp * 1000;
    this.timeData.timeZoneTime = momenttimezone(timestamp).tz(this.currentTimeZone).format('dddd, MMMM Do YYYY, h:mm:ss a');

  }

  changeTimeStamp() {
      this.setDateTime();
      this.changeTimezone();
  }
  checkNumberInput(e) {
    console.log(e.which);
    if ((e.which >= 96 && e.which <= 105) || e.which == 13 || e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39) {
      return true;
    } else {
      return false;
    }
  }

}
