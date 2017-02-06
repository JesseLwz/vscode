import { TodoItem } from './../shared/TodoItem';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoItems',
  templateUrl: './todoItems.component.html',
  styleUrls: ['./todoItems.component.css']
})

export class TodoItemsComponent implements OnInit {

  @Input() items: TodoItem[];
  //代表後面的items變數是從外面輸入(input)進來的。
  //@Input()預設會把後面變數的名稱當作component要接受資料的屬性名稱，
  //但我們也可以藉由@Input('xxx')的方式來進行調整 
  //@Input('items') theTodoItems: TodoItem[];
  //代表我們要接收的屬性依然是items，但是會傳給theTodoItems這個變數。

  @Output() deleteItem = new EventEmitter();
  //輸出deleteItem 這個事件 
  //輸出deleteItem 並且但有參數內容emit(item)

  constructor() { }

  ngOnInit() {
  }

  itemDone(item:TodoItem){
    item.done=!item.done;
  }

  delTodo(item:TodoItem) {
    //console.log(item.id)
    this.deleteItem.emit(item);
  }
}