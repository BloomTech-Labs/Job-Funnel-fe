import axios from 'axios';

export default function searchAPI() {
    return axios.create({
        baseURL: 'https://api.quickhire.dev',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

