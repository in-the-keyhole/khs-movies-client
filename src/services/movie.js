import fetch from 'isomorphic-fetch'

const LOAD_MOVIE_URL = 'http://localhost:3001/api/movies';
var myHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    'Content-Type': 'application/json'
}
export function fetChMovies() {

    return new Promise(function (resolve, reject) {

        var myRequest = new Request(LOAD_MOVIE_URL);
        myHeaders.token = localStorage.getItem("token");
        try {
            fetch(myRequest, {
                method: 'GET',
                headers: myHeaders,
                mode: 'cors'
            }).then(response => {
                if (response.status =='200'){
                    resolve(response.json());
                }else {
                    resolve([]);
                }
                
            }).catch(error => {
                reject(error);
            })
        } catch (ex) {
            return reject(ex);
        };
    })
}

export function fetChMovieById(id) {
    var myRequest = new Request(LOAD_MOVIE_URL + "/" + id);
    myHeaders.token = localStorage.getItem("token");
    return new Promise(function (resolve, reject) {
        fetch(myRequest, {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors'
        }).then(response => {
            resolve(response.json());
        }).catch(error => {
            reject(error);
        });
    })

}

export function changeRating(movie, rating) {

    var myRequest = new Request(LOAD_MOVIE_URL + "/rating/");
    myHeaders.token = localStorage.getItem("token");
    return new Promise(function (resolve, reject) {

        var myData = {
            "movie": movie,
            "rating": rating
        }

        fetch(myRequest, {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify(myData)
        }).then((response) => {
            resolve(response.json());
        }).catch((error) => {
            reject(error);
        });
    })
}

export const movieServices = {
    fetChMovies,
    fetChMovieById,
    changeRating
};

export default movieServices;
