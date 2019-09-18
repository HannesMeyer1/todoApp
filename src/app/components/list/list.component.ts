import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  newTodo: Todo;
  todos: Todo[] = [];
  constructor() {
    this.newTodo = new Todo('Bier');
    this.newTodo = new Todo('Alkohol');
    this.newTodo = new Todo('Softdrinks');
  }

  ngOnInit() {
  }

  toggle(todo: Todo): void {
    todo.done = !todo.done;
  }

  save(): void {
    this.todos.push(this.newTodo);
    this.newTodo = new Todo('');
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo);
  }

  search(input: any) {
    this.todos.find(t => t.label === t.label);
  }
}
