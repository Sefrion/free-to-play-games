import AllGames from '@/components/AllGames';
import SliderComponent from '@/components/SliderComponent';
import Spinner from '@/components/Spinner';
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
		dispatch(fetchAllGames());
	}, [dispatch]);

	if (status === 'pending') {
		return <Spinner />;
	} else if (status === 'failed') {
		return `Failed to fetch games with error: ${error}`;
	}

	return (
		<>
			<SliderComponent games={games} />
			<AllGames games={games} />
		</>
	);
};

export default HomePage;
