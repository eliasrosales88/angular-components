import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.css']
})
export class InputParentComponent implements OnInit {
  carInformation = [{brand: "Toyota", model:"Corolla"}, {brand: "Toyota", model:"Yaris"}];
  incremental = 3;
  constructor() { }

  ngOnInit() {
  }
  addCar(){
    this.carInformation.push({brand: 'marca'+this.incremental, model: 'modelo'+this.incremental});
    this.incremental++
  }
}
