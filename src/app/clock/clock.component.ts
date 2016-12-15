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
    this.update();
  }

  update() {
    let start = new Date();
    this.months = this.target.getMonth() - start.getMonth();
    this.days = this.target.getDate() - start.getDate();
    if (this.days < 0) {
      if (this.months === 0) {
        if (this.days === -1) {
          start = this.target;
          this.days = 0;
        }else {
          this.days = 31 - start.getDate() + 24;
          this.months = 11;
          this.target.setFullYear(this.target.getFullYear()+1);
        }
      }else {
        this.months --;
      }

    }
    let count = (this.target.getTime()-start.getTime())/1000;
    this.hours = Math.floor(count/(60*60))%24;
    this.minutes = Math.floor(count/(60))%60;
    this.seconds = Math.floor(count)%60;
  }

  format(n: number) {
    return ('0' + n).slice(-2);
  }
}
