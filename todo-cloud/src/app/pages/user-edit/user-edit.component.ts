import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { InputComponent } from '../../components/input/input.component';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-edit',
  imports: [CommonModule, FormsModule, NavbarComponent, InputComponent],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  userName = localStorage.getItem('userName') || '';
  oldName = this.userName;

  constructor(private userService: UserService) {}

  updateUserName() {
    if (!this.userName.trim()) return;

    this.userService.updateUserName(this.userName);
  }
}
