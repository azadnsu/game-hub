import axios from 'axios';


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d723dcd1fe6f45fda4f8555f7cb8ead3"
    }
})