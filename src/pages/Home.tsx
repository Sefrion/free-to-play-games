import {
	fetchAllGames,
	selectAllGames,
	selectGameError,
	selectGameStatus
} from '@/redux/gamesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';

const HomePage = () => {
	const dispatch = useAppDispatch();

	const games = useAppSelector(selectAllGames);
	const status = useAppSelector(selectGameStatus);
	const error = useAppSelector(selectGameError);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchAllGames());
		}
	}, [dispatch, status]);

	if (error) {
		return <h1>{error}</h1>;
	}

	return <div>HomePage</div>;
};

export default HomePage;
