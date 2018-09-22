import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-exercise',
  templateUrl: './databinding-exercise.component.html',
  styleUrls: ['./databinding-exercise.component.css']
})
export class DatabindingExerciseComponent implements OnInit {
  textToChange = "";
  isDisabled = true
  constructor() {
    
   }

   isInputEmpty($event){
     if ($event.target.value != "") {
       this.isDisabled = false;
       this.textToChange = $event.target.value;
     }
  }
  clearInput(){
    this.textToChange = "";
  }

  ngOnInit() {
  }

}
