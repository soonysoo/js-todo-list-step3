import Component from './core/Component.js';
import { teamAPI } from './api/teamAPI.js';

export default class Team extends Component {
    setup() {
        this.$state = { ids: [], names: [] };
        teamAPI.getAllTeams().then((teams) => {
            teams.map((team) => {
                this.$state.ids.push(team._id);
                this.$state.names.push(team.name);
            });
            this.render();
        });
    }
    template() {
        const { ids, names } = this.$state;
        return `
        ${ids
            .map(
                (id, key) => `
        <div class="team-card-container">
        <a href="/kanban.html?id=${id}" class="card">
            <div class="card-title">${names[key]}</div>
        </a></div>`
            )
            .join('')}
        <div class="add-team-button-container">
        <button id="add-team-button" class="ripple">
          <span class="material-icons">add</span>
        </button>
      </div>
      `;
    }
    setEvent() {
        console.log(this.$target);
        this.$target.querySelector('#add-team-button').addEventListener('click', () => {
            let name = prompt('팀 이름을 입력하세요 ');

            if (name.length >= 1) {
                teamAPI.addTeam({ name: name }).then((response) => {
                    alert('추가 되었습니다.');
                    this.setState({ ids: [...this.$state.ids, response._id], names: [...this.$state.names, response.name] });
                });
            } else {
                alert('빈 값입니다.');
            }
        });
    }
}
