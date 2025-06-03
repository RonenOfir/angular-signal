import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: \`
    <form (ngSubmit)="addTask()" class="space-y-2">
      <input [(ngModel)]="title" name="title" placeholder="Title" class="input" required />
      <textarea [(ngModel)]="description" name="description" placeholder="Description" class="input"></textarea>
      <button type="submit" class="btn">Add Task</button>
    </form>
  \`,
  styles: [\`
    .input { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; }
    .btn { padding: 0.5rem 1rem; background: #2563eb; color: white; border: none; border-radius: 0.25rem; }
  \`]
})
export class TaskFormComponent {
  taskService = inject(TaskService);
  title = '';
  description = '';

  addTask() {
    if (!this.title) return;
    this.taskService.addTask({ title: this.title, description: this.description, status: 'pending' });
    this.title = '';
    this.description = '';
  }
}