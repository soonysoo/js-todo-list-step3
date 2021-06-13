import Component from '../../../core/Component.js';

export default class TodoList extends Component {
    todoList;
    id;
    setup() {
        this.todoList = this.$props.todoList;
        this.id = this.$props._id;
        console.log(this.$props.todoList);
        console.log(this.id);
    }
    template() {
        let todolist = this.$props.todoList;
        console.log(todolist);
        let id = this.$props._id;
        return `
        <section class="main" data-memberID="${id}">
            <ul class="todo-list">
                ${todolist
                    .map(
                        (item) => `
                <li class="todo-list-item">
                    <div class="view">
                        <input class="toggle" type="checkbox" />
                            <label class="label">
                                <div class="chip-container">
                                    <select class="chip select">
                                        <option value="0" selected>순위</option>
                                        <option value="1">1순위</option>
                                        <option value="2">2순위</option>
                                    </select>
                                </div>
                                <span class="todo-item-text">${item.contents}</span>
                            </label>
                            <button class="destroy"></button>
                        </div>
                        <input class="edit" value="완료된 타이틀" />
                    </li>
                `
                    )
                    .join('')}
            </ul>
        </section>
        `;
    }
}
