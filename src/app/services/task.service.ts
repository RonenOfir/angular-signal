import { Injectable, signal, computed } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private storageKey = 'tasks';
  private _tasks = signal<Task[]>(this.loadFromStorage());

  readonly tasks = this._tasks.asReadonly();

  private loadFromStorage(): Task[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this._tasks()));
  }

  addTask(task: Omit<Task, 'id'>) {
    const newTask: Task = { id: Date.now(), ...task };
    this._tasks.update(tasks => [...tasks, newTask]);
    this.saveToStorage();
  }

  updateTask(updated: Task) {
    this._tasks.update(tasks =>
      tasks.map(task => (task.id === updated.id ? updated : task))
    );
    this.saveToStorage();
  }

  deleteTask(id: number) {
    this._tasks.update(tasks => tasks.filter(task => task.id !== id));
    this.saveToStorage();
  }

  toggleCompleted(id: number) {
  let updated = this.tasks().find(task =>
    task.id === id
  );

    if (updated) {
      updated.status = 'done';
    this.updateTask(updated);
  }

}

}
