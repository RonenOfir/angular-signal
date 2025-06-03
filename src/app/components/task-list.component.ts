import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { NgFor } from '@angular/common';
import { TaskItemComponent } from './task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, TaskItemComponent],
  template: `
    <div class="space-y-2 mt-3">
      <app-task-item *ngFor="let task of taskService.tasks()" [task]="task" />
    </div>
  `,
})
export class TaskListComponent {
  taskService = inject(TaskService);
}
