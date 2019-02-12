class API {

    static getUsers(keyword = 135) {
        if (keyword) {
            const fetchData = fetch(`https://api.github.com/users?${keyword}`)
                .then(resp => resp.json()).then(data => {
                    console.log(data);
                   return data ? data : ['no data response'];
                })
                .catch(err => new Error(err));
            return fetchData
        }
    }
}

export default API;