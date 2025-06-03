import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="text-center mt-10">
      <h1 class="text-4xl font-bold mb-6">Welcome to Task Manager</h1>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <a routerLink="/tasks" class="p-6 bg-blue-100 rounded-xl shadow hover:bg-blue-200 transition text-center">
          <div class="text-5xl">🗂️</div>
          <h2 class="mt-2 text-xl font-semibold">Task List</h2>
        </a>
        <a routerLink="/add-task" class="p-6 bg-green-100 rounded-xl shadow hover:bg-green-200 transition text-center">
          <div class="text-5xl">➕</div>
          <h2 class="mt-2 text-xl font-semibold">Add Task</h2>
        </a>
        <a routerLink="/tasks/completed" class="p-6 bg-purple-100 rounded-xl shadow hover:bg-purple-200 transition text-center">
          <div class="text-5xl">✅</div>
          <h2 class="mt-2 text-xl font-semibold">Completed Tasks</h2>
        </a>
      </div>
    </div>
  `
})
export class HomeComponent {}
