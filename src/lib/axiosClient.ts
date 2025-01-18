import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: 'https://www.freetogame.com/api'
});
