import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  name = '';
  faPlus = faPlus;

  constructor(private userService: UserService) {}

  createUser() {
    this.userService.createUser(this.name);
  }
}
