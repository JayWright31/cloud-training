import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  faPlus = faPlus;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() model = '';

  @Output() modelChange = new EventEmitter<string>();
  @Output() submit = new EventEmitter<void>();

  handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.model = inputElement.value;
    this.modelChange.emit(this.model);
  }

  handleClick() {
    this.submit.emit();
  }
}
