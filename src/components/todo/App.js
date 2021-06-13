import Component from '../../core/Component.js';
import MainTitle from './member/mainTItle.js';
import Components from './componenets.js';
import { todoAPI } from '../../api/todoAPI.js';

export default class App extends Component {
    title;
    members;
    setup() {
        this.$state = {
            id: this.getID(window.location.href),
        };
        todoAPI.getAllMember('o6Wwu460o').then((response) => {
            this.title = response.name;
            this.members = response.members;
            this.render();
        });
    }
    getID(path) {
        // console.log(path);
        // console.log(typeof path);
        return 'o6Wwu460o';
    }

    template() {
        return ` 
        <div id="todo-title"></div>
        <div class="todoapp-list-container flex-column-container"></div>
        `;
    }

    mounted() {
        new MainTitle(this.$target.querySelector('#todo-title'), this.title);
        new Components(this.$target.querySelector('.todoapp-list-container'), this.members);
    }
}
