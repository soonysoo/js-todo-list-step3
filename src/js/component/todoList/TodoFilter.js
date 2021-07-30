import Observer from "../../core/observer.js";
import { $, $$ } from "../../util/util.js";
import { FILTER } from "../../constants/constants.js";
import { teamAPI, memberAPI } from "../../api/api.js";

export class TodoFilter extends Observer{
    constructor(todolistState, filterState){
        super();
        this.todolistState = todolistState;
        this.filterState = filterState;
        this.memberId = todolistState.getMemberId();
    }
    templete(){
        const filter = this.filterState.get();
        const todo = this.todolistState.getList();
       // const count = this.countTotalTodo(filter, todo);
        return `
        <span class="todo-count">총 <strong></strong> 개</span>
        <ul class="filters">
          <li class="li-filter">
            <a href="#" class="all ${filter =="all"?"selected":""}">전체보기</a>
          </li>
          <li class="li-filter">
            <a href="#active" class="active ${filter =="active"?"selected":""}">해야할 일</a>
          </li>
          <li class="li-filter">
            <a href="#completed" class="completed  ${filter =="completed"?"selected":""}">완료한 일</a>
          </li>
        </ul>
        <button class="clear-completed">모두 삭제</button>
        
        `
    } 
    render(){
        const _selector = "#count-container-"+this.memberId;
        const target = $(_selector);
        target.innerHTML = this.templete();
        this.mounted();
    }
    mounted(){
        const filterBtn = $$('.li-filter');
        //filterBtn.forEach(btn => btn.addEventListener('click',this.onFilterChange.bind(this)));
    
        const deleteAllBtn = $('.clear-completed');
        //deleteAllBtn.addEventListener('click', this.onDeleteAllTodo.bind(this));
    }
    update(){
        this.render();
    }
    // async onDeleteAllTodo(){
    //     const selectedId = this.todolistState.get()._id;
    //     const response = await todoAPI.deleteAllTodoItem(selectedId);
    //     if(response.ok){
    //         const data = await userAPI.getUser(selectedId);
    //         this.todolistState.set(data);
    //     }
    // }
    // onFilterChange(e){  
    //     const mode= e.target.className.replace('selected','').trim();
    //     this.filterState.set(mode);
    // }
    // counTotalTodo(filter, todo){
    //     if(filter ==FILTER.ALL){
    //         return todo.length;
    //     }

    //     if(filter == FILTER.ACTIVE){
    //         return todo.filter(item => !item.isCompleted).length
    //     }
    //     if(filter == FILTER.COMPLETED){
    //         return todo.filter(item => item.isCompleted).length
    //     }
    // }
}