import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos!:Todo[];
  constructor(){
    var localItem = localStorage.getItem("todos");
    if(localItem==null){
      this.todos=[]
    }else{
      this.todos=JSON.parse(localItem);
    }
    
  }
  deleteTodo(event:Todo){
    const index = this.todos.indexOf(event);
    this.todos.splice(index,1);
    console.log(event);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  todoCheckBox(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  
}
