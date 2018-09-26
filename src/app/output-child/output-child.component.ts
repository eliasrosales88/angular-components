import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {
@Output() dataCreated = new EventEmitter<{title: string, content:string}>();
newTitle = 'Titulo';
newContent = 'Contenido';
incremetal = 1;
arrayToShow = [];

  constructor() { }

  ngOnInit() {
  }
  onAddData(){
    
    this.arrayToShow.push({
      title:    this.newTitle + this.incremetal, 
      content:  this.newContent + this.incremetal
    });

    this.dataCreated.emit({
      title: this.newTitle + this.incremetal,
      content:this.newContent + this.incremetal
    });

    this.incremetal++;
  }
}
