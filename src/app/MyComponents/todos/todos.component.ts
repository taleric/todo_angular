import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent {

    todos: Todo[];

    constructor() {
        this.todos = [
            {
                sno: 1,
                title: "Dinner",
                desc: " At 8pm",
                completed: false
            },
            {
                sno: 2,
                title: "Playing",
                desc: " At 6pm",
                completed: false
            },
            {
                sno: 3,
                title: "huehuehue",
                desc: " At 10pm",
                completed: true
            }
        ]
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }

    completeTodo(todo: Todo) {
        const found = this.todos.find(t => t.sno === todo.sno);
        if (found) {
            found.completed = true;
        }
    }
}
