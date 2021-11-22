import axios from 'axios'

const base_url = "https://jsonplaceholder.typicode.com/";

const Axios = axios.create({
    baseURL: base_url
})

export default Axios;