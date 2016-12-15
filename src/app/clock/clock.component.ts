import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  // Changes to targets late when including multiple holidays
  target = new Date('December 24, '+ new Date().getFullYear() + ' 00:00:00');

  months;
  days;
  hours;
  minutes;
  seconds;

  ngOnInit() {
    setInterval(() => {
      this.update();
      }, 1000);
    let start = new Date();
    this.months = this.target.getMonth()-start.getMonth();
    this.days = this.target.getDate()-start.getDate();
    let count = (this.target.getTime()-start.getTime())/1000;
    this.hours = Math.floor(count/(60*60))%24;
    this.minutes = Math.floor(count/(60))%60;
    this.seconds = Math.floor(count)%60;
  }

  update() {
    let start = new Date();
    this.months = this.target.getMonth()-start.getMonth();
    this.days = this.target.getDate()-start.getDate();
    let count = (this.target.getTime()-start.getTime())/1000;
    this.hours = Math.floor(count/(60*60))%24;
    this.minutes = Math.floor(count/(60))%60;
    this.seconds = Math.floor(count)%60;
  }

  format(n: number) {
    return ('0' + n).slice(-2);
  }
}
