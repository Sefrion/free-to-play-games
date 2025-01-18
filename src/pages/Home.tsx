import SliderComponent from '@/components/SliderComponent';
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

	if (status === 'pending') {
		return <h1>Loading...</h1>;
	} else if (status === 'failed') {
		return `Failed to fetch games with error: ${error}`;
	}

	return (
		<>
			<SliderComponent games={games} />
		</>
	);
};

export default HomePage;
