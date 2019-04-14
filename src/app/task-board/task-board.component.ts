import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { Board } from "../board";
import { TaskService } from "../task.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from 
'@angular/cdk/drag-drop';

@Component({
  selector: "task-board",
  templateUrl: "./task-board.component.html",
  styleUrls: ["./task-board.component.css"]
})
export class TaskBoardComponent implements OnInit {
  board = {
    columns: {}
  };

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {

      this.board.columns = tasks.reduce((col, task) => {
        (col[task["column"]] = col[task["column"]] || []).push(task);
        return col;
      }, {});


    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}