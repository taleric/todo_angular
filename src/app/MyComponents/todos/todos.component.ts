import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

    todos: Todo[];

    constructor()
    {
        this.todos = [
            {
                sno: 1,
                title: "Dinner",
                desc: " At 8pm",
                active: true
            },
            {
                sno: 2,
                title: "Playing",
                desc: " At 6pm",
                active: true
            },
            {
                sno: 3,
                title: "huehuehue",
                desc: " At 10pm",
                active: true
            }
        ]
    }

    onClick( todo: Todo ){
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
        console.log('deleted');
    }

    addTodo( todo: Todo ){
        this.todos.push(todo)
    }
}
