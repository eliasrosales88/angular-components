import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  isDisabled = true;
  demoText = 'Texto viejo :('
  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    }, 2000);
   }

  ngOnInit() {
  }

  onTextChange(){
    this.demoText = 'Texto nuevo :)';
  }
}
