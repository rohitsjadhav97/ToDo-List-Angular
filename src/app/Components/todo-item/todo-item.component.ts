import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
@Input() todo!:Todo;
@Input() i!:Number;
@Output() todoDelete:EventEmitter<Todo>=new EventEmitter;
@Output() todoChecked:EventEmitter<Todo>=new EventEmitter;

deleteTodo(todo:Todo){
  this.todoDelete.emit(todo);
  console.log("Deleted");

}
onchecked(todo:Todo){
    this.todoChecked.emit(todo);
}
}
