import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() clock = new EventEmitter<any>();
  time: number = 1;
  interval;
  constructor() { }

  onStart(){
    var self = this;
    this.interval = setInterval(function(){
      self.clock.emit(self.time);
      self.time++
      },1000);
  }

  onStop(){
    clearInterval(this.interval);
  }
  ngOnInit() {
  }

}
