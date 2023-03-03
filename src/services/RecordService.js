import axios from 'axios';

const rootUrl = 'http://localhost:8000/api'

export async function getRecords() {
    try{
        const url = `${rootUrl}/records`;
        return axios.get(url)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}