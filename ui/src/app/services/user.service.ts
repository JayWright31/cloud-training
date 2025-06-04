import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: ApiService, private router: Router) {}

  createUser(name: string) {
    if (!name.trim()) {
      window.alert('Please enter a name');
      return;
    }

    this.api
      .post<{ id: string; name: string }>('/user', { userName: name.trim() })
      .subscribe((user) => {
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userName', user.name);
        this.router.navigate(['/todos']);
      });
  }

  updateUserName(name: string) {
    if (!name.trim()) {
      window.alert('Please enter a name');
      return;
    }

    const userId = localStorage.getItem('userId');

    this.api
      .patch<{ id: string; name: string }>(`/user/update/${userId}`, {
        newName: name,
      })
      .subscribe((user) => {
        localStorage.setItem('userName', user.name);
        location.reload();
      });
  }
}
