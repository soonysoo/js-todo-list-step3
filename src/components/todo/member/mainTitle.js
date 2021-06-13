import Component from '../../../core/Component.js';

export default class MainTitle extends Component {
    setup() {
        console.log(this.$props);
        this.render();
    }
    template() {
        const teamName = this.$props;
        return `
        <h1 id="user-title" data-username="eastjun">
            <span><strong>${teamName}</strong>'s Todo List</span>
        </h1>
        `;
    }
}
