import Component from '../../../core/Component.js';

export default class TodoFilter extends Component {
    setup() {
        console.log(this.$target);
        this.render();
        console.log(this.template());
    }
    template() {
        return `
        <div class="count-container">
            <span class="todo-count">총 <strong>0</strong> 개</span>
            <ul class="filters">
                <li>
                    <a href="#all" class="selected">전체보기</a>
                </li>
                <li>
                    <a href="#priority">우선 순위</a>
                </li>
                <li>
                    <a href="#active">해야할 일</a>
                </li>
                <li>
                    <a href="#completed">완료한 일</a>
                </li>
            </ul>
            <button class="clear-completed">모두 삭제</button>
        </div>
        `;
    }
}
