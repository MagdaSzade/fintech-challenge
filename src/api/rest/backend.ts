import axios from 'axios';

export const backend = axios.create({
    baseURL: 'http://backend.carpo-team.sit.fintechchallenge.pl/api/',
});
