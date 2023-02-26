import {Component, OnInit} from '@angular/core';
import {ToDoListInterface} from "../../interfaces/to-do-list.interface";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  isLoading = false;

  ngOnInit(): void {
    setTimeout(() => {
      (this.isLoading = true);
    }, 700);
  }

  toDoList: ToDoListInterface[] = [
    { id: '1', text: 'one' },
    { id: '2', text: 'two' },
    { id: '3', text: 'three' },
  ];

  deleteTask(id: string) {
    this.toDoList = this.toDoList.filter((item) => item.id !== id);
  }

  addTask(task: string) {
      const newId = Math.max(...this.toDoList.map((x) => parseInt(x.id))) + 1;

      const newTask: ToDoListInterface = {
        id: newId.toString(),
        text: task,
      };
      this.toDoList.push(newTask);
  }
}
