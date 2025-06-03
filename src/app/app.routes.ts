import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { TaskListComponent } from './components/task-list.component';
import { TaskFormComponent } from './components/task-form.component';
import { CompletedTasksComponent } from './components/completed-tasks.component'; // <-- import it

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'tasks/completed', component: CompletedTasksComponent },
];
