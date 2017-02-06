import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
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