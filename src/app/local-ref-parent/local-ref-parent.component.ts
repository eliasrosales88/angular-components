import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalRefChildComponent } from '../local-ref-child/local-ref-child.component';

@Component({
  selector: 'app-local-ref-parent',
  templateUrl: './local-ref-parent.component.html',
  styleUrls: ['./local-ref-parent.component.css']
})
export class LocalRefParentComponent implements OnInit {
  userListReceived = [];
  @ViewChild('localRefChild') childComponent: LocalRefChildComponent;
  
  constructor() { }
  onUserAdded(userListFromChild){
    this.userListReceived.push(userListFromChild);
  }

  viewChildTest(){
    console.log(this.childComponent.usersArray);
  }
  ngOnInit() {
  }

}
