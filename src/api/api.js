import axios from 'axios';
import { config } from './config';
class API {

    static getUsers(keyword = 135) {
        if (keyword) {
            // const fetchData = fetch(`${config.USERS_API_URL}?${keyword}`)
            // .then(resp => resp.json())
            const fetchData = axios.get(`${config.USERS_API_URL}?${keyword}`).then(response => {
                // console.log(response.data);
                return response.data;
            })
                .catch(err => new Error(err));
            return fetchData
        }
    }

    static searchByUsers(keyword, ...extra) {
        if (keyword !== '') {
            const fetchURL = `${config.SEARCH_USER_API_URL}?q=${keyword}&page=${config.PAGE_NO}&per_page=${config.PER_PAGE_COUNT}`
            const fetchData = axios.get(fetchURL).then(response => {
                // console.log();
                return { users: response.data, paginationLink: response.headers.link, status: 200 };
                })
                .catch(err => {
                    console.error(new Error(err))
                    return {  users: {items: [], status: 403, message: config.FORBIDDEN_MSG + ' '+ err}};
                });

            return fetchData
        }
    }


}

export default API;