import Component from "./core/Component.js";
import teamAPI from "./api/teamAPI.js"

export default class Team extends Component {
  setup(){
    this.$state = { items: [] };
     teamAPI.getAllTeams()
    .then((teams)=>{
      
      this.$state.items.push(teams._id);
    });
  };

  template(){
    return `
      <div class="team-card-container">
        <a href="/kanban.html" class="card">
          <div class="card-title">
            Team B
          </div>
        </a>
      </div>
      <div class="add-team-button-container">
        <button id="add-team-button" class="ripple">
          <span class="material-icons">add</span>
        </button>
      </div>
    `;
  }
  setEvent(){
    this.$target.querySelector('#add-team-button').addEventListener('click', () => {
      const { items } = this.$state;
      this.setState({ items: [ ...items, `item${items.length + 1}` ] });
    });

  };

}