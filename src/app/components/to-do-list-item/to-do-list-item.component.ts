import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoListInterface} from "../../interfaces/to-do-list.interface";

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {

  @Input() todo!: ToDoListInterface;
  @Output('deleteTask') taskDeleted = new EventEmitter<string>();

  deleteTask(id: string) {
    this.taskDeleted.emit(id);
  }
}
