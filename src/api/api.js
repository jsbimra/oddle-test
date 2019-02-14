import {config} from './config';
class API {
   

    static getUsers(keyword = 135) {
        if (keyword) {
            const fetchData = fetch(`${config.USERS_API_URL}?${keyword}`)
                .then(resp => resp.json()).then(data => {
                    // console.log(data);
                   return data;
                })
                .catch(err => new Error(err));
            return fetchData
        }
    }

    static searchByUsers(keyword) {
        if (keyword !== '') {
            const fetchData = fetch(`${config.SEARCH_USER_API_URL}?q=${keyword}`)
                .then(resp => resp.json()).then(data => {
                    // console.log(data);
                   return data;
                })
                .catch(err => new Error(err));
            return fetchData
        }
    }


}

export default API;