import { Component } from '@angular/core';
import {ToDoListInterface} from "../../interfaces/to-do-list.interface";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  task: string = '';
  opacity = 0.6;
  disabledButton = false;

  toDoList: ToDoListInterface[] = [
    { id: '1', text: 'one' },
    { id: '2', text: 'two' },
    { id: '3', text: 'three' },
  ];

  onFocus() {
    this.opacity = 1;
    this.disabledButton = false;
  }

  deleteTask(id: string) {
    this.toDoList = this.toDoList.filter((item) => item.id !== id);
  }

  addTask(task: string) {
      const newId = Math.max(...this.toDoList.map((x) => parseInt(x.id))) + 1;

      let newTask: ToDoListInterface = {
        id: newId.toString(),
        text: task,
      };
      this.toDoList.push(newTask);
  }
}
