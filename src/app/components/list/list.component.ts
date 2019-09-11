import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];
  toggle(todo: Todo) {
    todo.done = true;
  }


  constructor(public label: String) {
    this.label
  }

  ngOnInit() {
  }

}
