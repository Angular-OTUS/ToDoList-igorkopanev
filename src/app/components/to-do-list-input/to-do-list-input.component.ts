import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-to-do-list-input',
  templateUrl: './to-do-list-input.component.html',
  styleUrls: ['./to-do-list-input.component.scss']
})
export class ToDoListInputComponent {

  @Output('addTask') taskAdded = new EventEmitter<string>();

  task = '';
  warning = '';
  disabledButton = false;
  green = 'green';

  onFocus(): void {
    this.disabledButton = true;
  }

  addTask(): void {
    if (this.task === '') {
      this.warning = 'This field should not be empty!'
      this.disabledButton = !this.disabledButton;
    }
    else {
      this.taskAdded.emit(this.task);
      this.task = '';
      this.warning = '';
    }
  }
}
