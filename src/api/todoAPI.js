const BASEURL = 'https://js-todo-list-9ca3a.df.r.appspot.com/api/teams/';

export const storage = window.localStorage;
/*body에 값 보내주는 API*/
const fetchAPI_body = async function (url, method, body) {
    try {
        const result = await fetch(BASEURL + url, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(body),
        });
        return result.json();
    } catch (error) {
        console.error('error' + url);
    }
};
/*body값 없는 API*/
const fetchAPI_GET = async function (url) {
    try {
        let response = await fetch(BASEURL + url);
        return await response.json();
    } catch (error) {
        console.error('error' + error);
    }
};

const fetchAPI_DELETE = async function (url, method) {
    try {
        let response = await fetch(BASEURL + url, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.error('error' + error);
    }
};

export const todoAPI = {
    getAllMember: (teamID) => {
        return fetchAPI_GET(teamID, 'GET');
    },
    addMembers: (teamId, name) => {
        return fetchAPI_body(teamId + '/members', 'POST', { name: name });
    },
};
