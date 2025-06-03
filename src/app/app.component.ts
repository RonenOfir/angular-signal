import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="bg-blue-600 text-white p-4 space-x-4">
      <a routerLink="/" class="hover:underline">Home</a>
      <a routerLink="/tasks" class="hover:underline">Task Lists</a>
      <a routerLink="/add-task" class="hover:underline">Add Task</a>
    </nav>

    <main class="p-4">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}
