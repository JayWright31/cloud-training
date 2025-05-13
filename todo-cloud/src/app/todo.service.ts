import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from './models/Todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient, private router: Router) {}

  createTodo(title: string): Observable<Todo> {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.alert('Please create a user first');
      return of();
    }

    return this.http.post<Todo>('http://localhost:8080/todo', {
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

    return this.http.get<Todo[]>(`http://localhost:8080/todo/user/${userId}`);
  }

  updateTodoTitle(todoId: string, newTitle: string): Observable<Todo> {
    return this.http.patch<Todo>(
      `http://localhost:8080/todo/${todoId}`,
      null, // No body, only query param
      { params: { title: newTitle } }
    );
  }

  toggleTodoComplete(todoId: string, completed: boolean): Observable<Todo> {
    return this.http.patch<Todo>(
      `http://localhost:8080/todo/complete/${todoId}`,
      null,
      { params: { complete: completed.toString() } }
    );
  }

  deleteTodo(todoId: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/todo/${todoId}`);
  }
}
