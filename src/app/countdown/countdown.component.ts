import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit,OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTimer: number;
  @Input()
  seconds = 11;
  clearTimer() {
    clearInterval(this.intervalId);
  }
  ngOnDestroy(){
    this.clearTimer();
  }
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(()=>{
      this.remainingTimer--;
      if (this.remainingTimer === 0) {
        this.message = 'Blast off!';
        this.clearTimer();
      } else {
        this.message = `T-${this.remainingTimer} `;
      }
    }, 1000);
  }

  start() {
    this.countDown();
    if (this.remainingTimer <= 0) {
      this.remainingTimer = this.seconds;
    }
  }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTimer} seconds`;
  }
  reset() {
    this.clearTimer();
    this.remainingTimer = this.seconds;
    this.message = 'click start button to start the countdown';
  }

  constructor() { }

  ngOnInit() {
  }

}
