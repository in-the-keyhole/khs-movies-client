import fetch from 'isomorphic-fetch'

export function register(email, password, confirmPassword ) {

    return new Promise(function (resolve, reject) {
        const USER_REGISTER_URL = 'http://localhost:3001/api/register';
 
        var myRequest = new Request(USER_REGISTER_URL);
        var myHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json'
        }
        var myData = {
            "email": email,
            "password": password,
            "confirmPassword":confirmPassword
        }

        fetch(myRequest, {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(myData)
        }).then((response) => {
            resolve(response );
        }).catch((error) => {
            resolve(error);
        });
    })
}


export const registeServices = {
    register
};

export default registeServices;
