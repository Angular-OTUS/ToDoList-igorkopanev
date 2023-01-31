import {Component, EventEmitter, Output} from '@angular/core';
import {ToDoListInterface} from "../../interfaces/to-do-list.interface";

@Component({
  selector: 'app-to-do-list-input',
  templateUrl: './to-do-list-input.component.html',
  styleUrls: ['./to-do-list-input.component.scss']
})
export class ToDoListInputComponent {

  @Output('addTask') taskAdded = new EventEmitter<string>();

  task: string = '';
  warning: string = '';
  opacity = 0.6;
  disabledButton = false;

  onFocus() {
    this.opacity = 1;
    this.disabledButton = false;
  }

  addTask() {
    if (this.task === '') {
      this.warning = 'This field should not be empty!'
      this.disabledButton = !this.disabledButton;
      this.opacity = 0.6;
    }
    else {
      this.taskAdded.emit(this.task);
      this.task = '';
      this.warning = '';
    }
  }
}
