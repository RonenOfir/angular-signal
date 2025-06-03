import { Component, Input, inject } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  template: \`
    <div class="flex justify-between items-center p-2 border rounded">
      <div>
        <h3 class="font-bold">{{ task.title }}</h3>
        <p>{{ task.description }}</p>
        <p>Status: {{ task.status }}</p>
      </div>
      <div class="space-x-2">
        <button (click)="toggleStatus()" class="btn">Toggle</button>
        <button (click)="deleteTask()" class="btn-danger">Delete</button>
      </div>
    </div>
  \`,
  styles: [\`
    .btn { padding: 0.25rem 0.5rem; background: #4ade80; border: none; border-radius: 0.25rem; }
    .btn-danger { padding: 0.25rem 0.5rem; background: #ef4444; color: white; border: none; border-radius: 0.25rem; }
  \`]
})
export class TaskItemComponent {
  @Input() task!: Task;
  taskService = inject(TaskService);

  toggleStatus() {
    const updated = { ...this.task, status: this.task.status === 'pending' ? 'done' : 'pending' };
    this.taskService.updateTask(updated);
  }

  deleteTask() {
    this.taskService.deleteTask(this.task.id);
  }
}