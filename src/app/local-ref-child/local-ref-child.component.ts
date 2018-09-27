import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-local-ref-child',
  templateUrl: './local-ref-child.component.html',
  styleUrls: ['./local-ref-child.component.css']
})
export class LocalRefChildComponent implements OnInit {
  @Output() userListFromChild = new EventEmitter<{username: string}>();
  @ViewChild('usernameInput') username: ElementRef;
  usersArray = [];
  constructor() { }

  addUser(userNameInput){
    console.log(userNameInput);
    this.usersArray.push(userNameInput.value);
    console.log(this.usersArray);

    this.userListFromChild.emit({username: userNameInput.value});
  }

  viewChildTest(){
    console.log(this.username.nativeElement);
  }
  ngOnInit() {
  }

}
