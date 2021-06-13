import Component from '../../../core/Component.js';

export default class MemberAddBtn extends Component {
    addMember;
    setup() {
        console.log(this.$target);
        this.addMember = this.$props.addMember;
        this.render();
        console.log(this.template());
    }
    template() {
        return `
       <button id="add-user-button" class="ripple">
          <span class="material-icons">add</span>
        </button>
        `;
    }

    setEvent() {
        document.querySelector('#add-user-button').addEventListener('click', addTeam);
    }
}
