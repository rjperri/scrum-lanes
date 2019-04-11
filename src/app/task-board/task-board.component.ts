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
    columns: [
      {name: "backlog", tasks: []},
      {name: "inProgress", tasks: []},
      {name: "done", tasks: []}
    ]
  };

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    //this.board = new Board();
    this.taskService.getTasks().subscribe(tasks => {
      this.board.columns.forEach((c) => {
        c.tasks = tasks.filter(t => t.column === c.name);
      });
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