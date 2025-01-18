import axios from 'axios';

export const axiosClient = axios.create({
	baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api',
	headers: {
		'x-rapidapi-key': '97149b3738msh198a4a282db0e93p18e021jsneede97e9977c',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
});
