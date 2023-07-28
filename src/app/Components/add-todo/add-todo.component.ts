import { Component,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter;
  title!:string;
  desc!:string;
  ino=Todo.length;
  onSubmit(){
    const todo={
      no:this.ino,
      title:this.title,
      desc:this.desc,
      active:true
    };
    this.todoAdd.emit(todo);
  }
  

}
