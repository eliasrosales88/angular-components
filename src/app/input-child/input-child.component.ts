import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  templateUrl: './input-child.component.html',
  styleUrls: ['./input-child.component.css']
})
export class InputChildComponent implements OnInit {
  @Input() car: {brand:string, model:string};
  carLot=[];
  incremental = 0;
  constructor() { }

  ngOnInit() {
  }

  
}
