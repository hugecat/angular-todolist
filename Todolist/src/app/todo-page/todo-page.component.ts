import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  @ViewChild('todoInput') todoInput!: ElementRef<MatInput>;
  todoList: Todo[] = [];
  todoEditing: Todo | null = null;

  constructor() {}

  ngOnInit(): void {
    const todoJson = localStorage.getItem('todoList');
    if (todoJson) {
      this.todoList = JSON.parse(todoJson);
    }
  }

  changeStatus(todo: Todo): void {
    todo.status = !todo.status;

    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  delete(todo: Todo) {
    this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  edit(todo: Todo) {
    this.todoEditing = todo;
    this.todoInput.nativeElement.value = todo.context;

    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  finishEdit(): void {
    this.todoList.forEach((t) => {
      if (t.id === this.todoEditing?.id) {
        t.context = this.todoInput.nativeElement.value;
      }
    });
    this.todoEditing = null;
    this.todoInput.nativeElement.value = '';
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  add(): void {
    const context = this.todoInput.nativeElement.value.trim();
    if (context) {
      this.todoList.push({
        id: uuidv4(),
        context,
        status: false,
      });
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
      this.todoInput.nativeElement.value = '';
    }
  }

  inputKeypress($event: KeyboardEvent): void {
    if ($event.key === 'Enter') {
      if (this.todoEditing) {
        this.finishEdit();
      } else {
        this.add();
      }
    }
  }
}
