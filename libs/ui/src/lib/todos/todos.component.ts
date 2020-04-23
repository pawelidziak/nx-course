import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@nx-course/data';

@Component({
  selector: 'nx-course-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
