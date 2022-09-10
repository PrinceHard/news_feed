import axios from 'axios';
const BASE_URL = 'https://newsapi.org/v2/'

export const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'X-Api-Key': '6735aff034d64430a7e0b52414e7ce51',
    },
})