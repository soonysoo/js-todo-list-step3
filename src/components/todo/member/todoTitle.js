import Component from '../../../core/Component.js';

export default class TodoTitle extends Component {
    name;
    setup() {
        //this.render();
    }
    template() {
        const name = this.$props;
        return `
        <h2>
            <span><strong>${name}</strong>'s Todo List</span>
        </h2>
        `;
    }
}
