import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-life-hook-parent',
  templateUrl: './life-hook-parent.component.html',
  styleUrls: ['./life-hook-parent.component.css']
})
export class LifeHookParentComponent implements OnInit{
  parentElement = [{name: 'Gabriel', lastname:'Gonzalez'}];
  constructor() {
    console.log("LifeHook Constructor called from life-hook-parent");
  }

  ngOnInit() {
    console.log("ngOnInit called life-hook-parent");
  }

  addElement(){
    this.parentElement.push({name: "Pedro", lastname:"Perez"});
  }

  testOnChanges(){
    this.parentElement[0].name = "Ernesto";
  }

  destroyFirstElement(){
    this.parentElement.splice(0, 1);
  }
}
