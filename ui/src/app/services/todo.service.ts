import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/Todo';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private api: ApiService, private router: Router) {}

  createTodo(title: string): Observable<Todo> {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.alert('Please create a user first');
      return of();
    }

    return this.api.post<Todo>('/todo', {
      title,
      userId,
    });
  }

  getUserTodos(): Observable<Todo[]> {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.alert('Please create a user first');
      return of([]);
    }

    return this.api.get<Todo[]>(`/todo/user/${userId}`);
  }

  updateTodoTitle(todoId: string, newTitle: string): Observable<Todo> {
    return this.api.patch<Todo>(
      `/todo/${todoId}`,
      null, // No body, only query param
      { params: { title: newTitle } }
    );
  }

  toggleTodoComplete(todoId: string, completed: boolean): Observable<Todo> {
    return this.api.patch<Todo>(`/todo/complete/${todoId}`, null, {
      params: { complete: completed.toString() },
    });
  }

  deleteTodo(todoId: string): Observable<void> {
    return this.api.delete<void>(`/todo/${todoId}`);
  }
}
