import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'https://backend.carpo-team.sit.fintechchallenge.pl/api/',
    auth: {
        username: 'admisie',
        password: 'mis_yogi',
    },
});
