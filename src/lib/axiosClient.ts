import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
	headers: {
		'x-rapidapi-key': import.meta.env.RAPIDAPI_KEY as string,
		'x-rapidapi-host': import.meta.env.RAPIDAPI_HOST as string
	}
});

// 'https://www.freetogame.com/api'
