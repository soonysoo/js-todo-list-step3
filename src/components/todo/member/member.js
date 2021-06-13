import Component from '../../../core/Component.js';
import TodoInput from './todoInput.js';
import TodoTitle from './todoTitle.js';
import TodoFilter from './todoFilters.js';
import TodoList from './todoList.js';

export default class Members extends Component {
    todo;

    setup() {
        this.todo = this.$props;
        console.log(this.todo);
        //this.render();
        this.template();
    }
    template() {
        this.$target.innerHTML = new TodoTitle(this.$target, this.todo.name).template();
        this.$target.innerHTML += `<div class="todoapp" data-todoapp="${this.todo._id}">`;
        let child = document.querySelector(`div[data-todoapp="${this.todo._id}"]`);
        child.innerHTML += new TodoInput(child, this.todo).template();
        child.innerHTML += new TodoList(child, this.todo).template();
        child.innerHTML += new TodoFilter(child, this.todo).template();
    }
}
