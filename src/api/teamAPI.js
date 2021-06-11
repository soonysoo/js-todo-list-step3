const BASEURL = 'https://js-todo-list-9ca3a.df.r.appspot.com/api/teams';

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

const fetchAPI_GET = async function (url) {
    try {
        let response = await fetch(BASEURL + url);
        return await response.json();
    } catch (error) {
        console.error('error' + error);
    }
};

export const teamAPI = {
    addTeam: (teamName) => {
        return fetchAPI_body('', 'POST', teamName);
    },
    getAllTeams: () => {
        return fetchAPI_GET('', 'GET');
    },
};
