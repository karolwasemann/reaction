import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  timerEnded = false;
  reactionTime = '0ms';
  
  ngOnInit() {
    this.setTimer(5000);
  }

  setTimer(timeLeft: number) {
    setTimeout(() => {
      this.timerEnded = true;
      this.reactionTime = '8ł4D 5Y5T3mU';
    }, timeLeft);
  }
}
