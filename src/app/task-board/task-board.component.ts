import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from 
'@angular/cdk/drag-drop';

@Component({
  selector: "task-board",
  templateUrl: "./task-board.component.html",
  styleUrls: ["./task-board.component.css"]
})
export class TaskBoardComponent implements OnInit {
  backlog: Task[];
  inProgress: Task[];
  done: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.backlog = tasks.filter(t => t.column === "backlog");
      this.inProgress = tasks.filter(t => t.column === "inProgress");
      this.done = tasks.filter(t => t.column === "done");
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