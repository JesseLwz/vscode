import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <h1>{{title}}</h1>
    <h2>{{ 'now is '+ getDate() }}</h2>`,
  //templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Welecome to TODO App';

  getDate(){
    return (new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}