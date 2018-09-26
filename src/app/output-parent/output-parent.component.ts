import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {
  dataReceivedFromChild: [{title: string, content:string }] = [{title: 'Titulo inicial', content: 'Contenido inicial'}];

  constructor() { }

  ngOnInit() {
  }

  onDataCreated(data: {title: string, content:string}){
    this.dataReceivedFromChild.push({
      title: data.title,
      content: data.content
    });
  }
}
