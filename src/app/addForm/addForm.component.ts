import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addForm',
  templateUrl: './addForm.component.html',
  styleUrls: ['./addForm.component.css']
})
export class AddFormComponent implements OnInit {

  placeholderText = '請輸入代辦事項';
  todoText = '';

  @Output() addTodoItem = new EventEmitter();
  //代表addTodoItem這個component的property是一個要輸出(output)的東西，
  //一個用來處理事件的EventEmitter。
  
  constructor() { }

  ngOnInit() {
  }

  addTodo(e: MouseEvent) {
    this.addTodoItem.emit(this.todoText);
    //藉由addTodoItem.emit(this.todoText)來把事件發射出去，
    //並且參數內容為this.todoText，
    //這個參數會變成(addTodoItem)=addTodo($event)的$event部分，
    //如此一來在AppComponent的addTodo函數就可以接收到這個參數
    this.todoText = '';
  }

  // addTodo(e: MouseEvent) {
  //   console.log('enter text is ' + this.todoText)
  // }

  //changeTodoText(e:KeyboardEvent){
  //  this.todoText = (e.target as HTMLInputElement).value;
  //}

}