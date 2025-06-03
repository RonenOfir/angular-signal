import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
  <div class="grid h-48 grid-cols-2 place-content-center gap-4 ...">

    <form (ngSubmit)="addTask()" class="space-y-2 mt-2">
      <h1 class="font-bold">Add New Task</h1>
      <input [(ngModel)]="title" name="title" placeholder="Title" class="input" required />
      <textarea [(ngModel)]="description" name="description" placeholder="Description" class="input"></textarea>
      <button type="submit" class="btn">Add</button>
    </form>
</div>
  `,
  styles: [`
    .input { width: 100%; padding: 0.5rem; border: 1px solid #ccc; border-radius: 0.25rem; }
    .btn { padding: 0.5rem 1rem; background: #2563eb; color: white; border: none; border-radius: 0.25rem; }
  `]
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
