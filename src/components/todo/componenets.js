import Component from '../../core/Component.js';
import Members from './member/member.js';
import { todoAPI } from '../../api/todoAPI.js';
import MemberAddBtn from './member/addButton.js';

export default class Components extends Component {
    todos;

    setup() {
        this.todos = this.$props;
        this.render();
    }
    template() {
        return `
         ${this.todos
             .map(
                 (todo) => `
            <div class="todoapp-container" data-memderid ="${todo._id}"></div>
         `
             )
             .join('')}
             <li class="add-user-button-container">

        `;
    }
    mounted() {
        this.todos.map((todo) => {
            console.log(todo);
            let root = document.querySelector(`div[data-memderid="${todo._id}"]`);
            new Members(root, todo);
        });
        let buttonnode = document.querySelector('.add-user-button-container');
        new MemberAddBtn(buttonnode, { addMember: this.addMember });
    }

    addMember = async (name) => {
        await todoAPI.addMembers('o6Wwu460o', name);
        await this.render();
    };
}
