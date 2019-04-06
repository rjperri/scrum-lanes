import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TaskBoardComponent } from "./task-board/task-board.component";
import { TaskService } from "./task.service";

@NgModule({
  declarations: [AppComponent, TaskBoardComponent],
  imports: [BrowserModule],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
