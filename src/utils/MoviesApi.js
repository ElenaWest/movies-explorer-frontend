import { URL_BEATFILM_MOVIES } from "./constants";

class ApiMovies {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _checkResponse(res) {        
        return res.ok ? res.json() : Promise.reject(`Ошибка сервера ${res.status}`);
    }
    _request(url, options) {
        return fetch(`${this._url}${url}`, options)
        .then(this._checkResponse)
    }  
    getMovies() {
        return this._request('/')
    }  
}

const apiMovies = new ApiMovies({
    baseUrl: URL_BEATFILM_MOVIES,
});

export default apiMovies;
