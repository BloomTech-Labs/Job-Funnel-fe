import axios from 'axios';

export default function searchAPI() {
    return axios.create({
        baseURL: 'https://quickhire-api-dev.j535vysrhe.us-east-1.elasticbeanstalk.com',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

