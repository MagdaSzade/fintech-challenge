import axios from 'axios';

export const backend = axios.create({
    baseURL: 'https://backend.carpo-team.sit.fintechchallenge.pl/api/',
});
