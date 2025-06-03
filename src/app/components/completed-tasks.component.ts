import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.service';
import { TaskItemComponent } from './task-item.component';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  template: `
    <h2 class="text-2xl font-bold mb-4">Completed Tasks</h2>
    <div *ngIf="completedTasks().length > 0; else noTasks">
      <app-task-item
        *ngFor="let task of completedTasks()"
        [task]="task"
        (delete)="taskService.deleteTask(task.id)"
        (toggle)="taskService.toggleCompleted(task.id)"
      ></app-task-item>
    </div>
    <ng-template #noTasks>
      <p class="text-gray-500">No completed tasks yet.</p>
    </ng-template>
  `
})
export class CompletedTasksComponent {
  taskService = inject(TaskService);
  completedTasks = computed(() => this.taskService.tasks().filter(t => t.status === 'done'));
}
