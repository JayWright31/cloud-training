import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faUndo,
  faEdit,
  faTrash,
  faTimes,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../models/Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  @Output() completeToggled = new EventEmitter<Todo>();
  @Output() editSubmitted = new EventEmitter<{
    todo: Todo;
    newTitle: string;
  }>();
  @Output() deleteClicked = new EventEmitter<Todo>();

  @ViewChild('editInput') editInput!: ElementRef<HTMLInputElement>;

  isEditing = false;
  editedTitle = '';

  faCheck = faCheck;
  faUndo = faUndo;
  faEdit = faEdit;
  faTrash = faTrash;
  faSave = faSave;
  faTimes = faTimes;

  onToggleComplete() {
    this.completeToggled.emit(this.todo);
  }

  onEdit() {
    this.isEditing = true;
    this.editedTitle = this.todo.title;
    setTimeout(() => {
      this.editInput?.nativeElement.focus();
    }, 0);
  }

  onCancelEdit() {
    this.isEditing = false;
  }

  onSubmitEdit() {
    if (
      this.editedTitle.trim() &&
      this.editedTitle.trim() !== this.todo.title
    ) {
      this.editSubmitted.emit({
        todo: this.todo,
        newTitle: this.editedTitle.trim(),
      });
    }
    this.isEditing = false;
  }

  onDelete() {
    this.deleteClicked.emit(this.todo);
  }
}
