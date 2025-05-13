import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  name = '';
  faPlus = faPlus;

  constructor(private http: HttpClient, private router: Router) {}

  createUser() {
    if (!this.name.trim()) {
      window.alert('Please enter a name');
      return;
    }

    this.http
      .post<{ id: string; name: string }>('http://localhost:8080/user', {
        userName: this.name,
      })
      .subscribe((user) => {
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userName', user.name);
        this.router.navigate(['/todos']);
      });
  }
}
