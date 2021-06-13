import Component from '../../../core/Component.js';

export default class TodoInput extends Component {
    constructor($parent, props) {
        super($parent, props);
        this.render();
    }

    setup() {
        console.log(this.$target);
        //this.render();
        console.log(this.template());
    }
    template() {
        return `
        <section class="input-container">
            <input class="new-todo" placeholder="할 일을 입력해주세요." autofocus />
        </section>
        `;
    }
}
