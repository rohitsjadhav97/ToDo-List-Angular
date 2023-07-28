import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { AddTodoComponent } from './Components/add-todo/add-todo.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  {path:"",component:TodoListComponent},
  {path:"about",component:AboutComponent},
  { path: '**', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
