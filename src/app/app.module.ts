import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {DemoMaterialModule} from './material-module';
import { AppComponent } from "./app.component";
import { TaskBoardComponent } from "./task-board/task-board.component";
import { TaskService } from "./task.service";
import {CdkDragDropConnectedSortingExample} from "./drag-and-drop/cdk-drag-drop-connected-sorting-example"

@NgModule({
  declarations: [AppComponent, TaskBoardComponent, CdkDragDropConnectedSortingExample],
  imports: [BrowserModule, DemoMaterialModule],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
