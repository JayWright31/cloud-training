import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  createUser(name: string) {
    if (!name.trim()) {
      window.alert('Please enter a name');
      return;
    }

    this.http
      .post<{ id: string; name: string }>('http://localhost:8080/user', {
        userName: name,
      })
      .subscribe((user) => {
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userName', user.name);
        this.router.navigate(['/todos']);
      });
  }
}
