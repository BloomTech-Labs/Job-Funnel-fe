import axios from 'axios';

export default function axiosWithAuth() {
    const token = sessionStorage.getItem('token');
    return axios.create({
        baseURL: 'https://quickhire.herokuapp.com/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};
