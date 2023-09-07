import axios from "axios";

const API_KEY = '38496142-de810ebfa356611df49c7e659';

axios.defaults.baseURL = 'https://pixabay.com/api';



export const fetchImages = async (search, page = 1) => {
    const params = new URLSearchParams ({
    key: API_KEY,
    q: search,
    page,
    per_page: 12
    })
    
    const resp = await axios.get(`/?${params}`)
    return resp.data;
}