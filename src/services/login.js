import fetch from 'isomorphic-fetch'

export function login(email, password) {
    return new Promise(function (resolve, reject) {
        const USER_LOGIN_URL = 'http://localhost:3001/api/login';

        var myRequest = new Request(USER_LOGIN_URL);
        var myHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json'
        }
        var myData = {
            "email": email,
            "password": password
        }

        fetch(myRequest, {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(myData)
        }).then((response) => {
            resolve(response.json());
        }).catch((error) => {
            resolve(error.json());
        });
    })
}

export const loginServices = {
    login
};

export default loginServices;
