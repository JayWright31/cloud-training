import { Routes } from '@angular/router';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';

export const routes: Routes = [
  { path: '', component: UserCreateComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'user', component: UserEditComponent },
  { path: '**', redirectTo: '' },
];
