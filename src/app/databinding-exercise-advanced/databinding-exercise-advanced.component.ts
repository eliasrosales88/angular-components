import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-exercise-advanced',
  templateUrl: './databinding-exercise-advanced.component.html',
  styleUrls: ['./databinding-exercise-advanced.component.css']
})
export class DatabindingExerciseAdvancedComponent implements OnInit {
  oddNumber = [];
  evenNumber = [];
  constructor() { }

  onStarted(event){
    console.log(event);
    if (event % 2 != 0) {
      this.oddNumber.push(event);
    }else if (event % 2 == 0) {
      this.evenNumber.push(event);
    }
  }
  ngOnInit() {
  }

}
