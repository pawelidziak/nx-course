import { Component } from '@angular/core';

@Component({
  selector: 'nx-course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  todos = ['Hardcoded todo 1'];

  addTodo() {
    this.todos.push(`Dynamic todo ${ this.todos.length + 1 }`)
  }
}
