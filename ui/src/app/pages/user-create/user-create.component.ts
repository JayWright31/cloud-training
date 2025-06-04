import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../services/user.service';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-user-create',
  imports: [CommonModule, FormsModule, FontAwesomeModule, InputComponent],
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css',
})
export class UserCreateComponent {
  name = '';
  faPlus = faPlus;

  constructor(private userService: UserService) {}

  createUser() {
    console.log('Creating user:', this.name);
    this.userService.createUser(this.name);
  }
}
