import { HTTP_REQUEST } from "./util.js";

const BASE_URL = 'https://js-todo-list-9ca3a.df.r.appspot.com/api/teams';


export const teamAPI = {
  async postTeam(name){
    return await fetch(BASE_URL, HTTP_REQUEST.POST(name));
  },
  async getTeam(){
    const response =  await fetch(`${BASE_URL}`)
    return await response.json();
  }
}

export const memberAPI = {
  async postMemberAdd(teamId, name){
    return await fetch(`${BASE_URL}/${teamId}/members`,HTTP_REQUEST.POST(name));
  },
  async getMemberList(teamId){
    const response =  await fetch(`${BASE_URL}/${teamId}`)
    return await response.json();
  },
  async getMemberTodoList(teamId, memberId){
    const response = await fetch(`${BASE_URL}/${teamId}/members/${memberId}`)
    return await response.json();
  },
  async postMemberTodo(teamId,memberId,contents){
    return await fetch(`${BASE_URL}/${teamId}/members/${memberId}/items`,HTTP_REQUEST.POST(contents));
  },
  async deleteMemberTodo(teamId, memberId,itemId){
    return await fetch(`${BASE_URL}/${teamId}/members/${memberId}/items/${itemId}`,HTTP_REQUEST.DELETE());
  },
  async putMemberToggleTodo(teamId, memberId,itemId){
    return await fetch(`${BASE_URL}/${teamId}/members/${memberId}/items/${itemId}/toggle`, HTTP_REQUEST.PUT())
  },
  async putMemberUpdateTodo(teamId, memberId,itemId, newItem){
    return await fetch(`${BASE_URL}/${teamId}/members/${memberId}/items/${itemId}`, HTTP_REQUEST.PUT(newItem));
  },
  async putTodoPriority(teamId, memberId,itemId, priority){
    return await fetch(`${BASE_URL}/${teamId}/members/${memberId}/items/${itemId}/priority`, HTTP_REQUEST.PUT(priority));
  },
  async deleteTodoAll(teamId, memberId){
    return await fetch(`${BASE_URL}/${teamId}/members/${memberId}/items`, HTTP_REQUEST.DELETE());
  }
}