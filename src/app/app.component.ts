import { TodoItem } from './shared/TodoItem';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  todoItems: TodoItem[] = [{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  }, {
    id: 2,
    value: 'Todo Item No.2',
    done: true
  }, {
    id: 3,
    value: 'Todo Item No.3',
    done: false
  }];

  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

  delTodo(item:TodoItem){
    console.log(item);
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
    console.log(this.todoItems);
  }

}
