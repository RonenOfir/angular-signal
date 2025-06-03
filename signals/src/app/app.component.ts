import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list.component';
import { TaskFormComponent } from './components/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  template: \`
    <main class="max-w-xl mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Task Manager</h1>
      <app-task-form></app-task-form>
      <app-task-list></app-task-list>
    </main>
  \`
})
export class AppComponent {}