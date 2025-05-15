import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../models/Todo';
import { TodoItemComponent } from '../../components/todo-item/todo-item.component';
import { TodoService } from '../../todo.service';
import { InputComponent } from '../../components/input/input.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    TodoItemComponent,
    InputComponent,
    NavbarComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  todos: Todo[] = [];
  todoTitle = '';
  faPlus = faPlus;
  userName = localStorage.getItem('userName') || '';

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getUserTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo() {
    if (!this.todoTitle.trim()) return;

    this.todoService.createTodo(this.todoTitle).subscribe((newTodo) => {
      this.todos.push(newTodo);
      this.todoTitle = '';
    });
  }

  handleToggleComplete(todo: Todo) {
    this.todoService
      .toggleTodoComplete(todo.id, !todo.completed)
      .subscribe((updated) => {
        todo.completed = updated.completed;
      });
  }

  handleEdit(event: { todo: Todo; newTitle: string }) {
    this.todoService
      .updateTodoTitle(event.todo.id, event.newTitle)
      .subscribe((updated) => {
        event.todo.title = updated.title;
      });
  }

  handleDelete(todo: Todo) {
    if (confirm('Delete this todo?')) {
      this.todoService.deleteTodo(todo.id).subscribe(() => {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
    }
  }
}
