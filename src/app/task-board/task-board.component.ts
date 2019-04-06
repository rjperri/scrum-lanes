import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  selector: "task-board",
  templateUrl: "./task-board.component.html",
  styleUrls: ["./task-board.component.css"]
})
export class TaskBoardComponent implements OnInit {
  thing: string;
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}