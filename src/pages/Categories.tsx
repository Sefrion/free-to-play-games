import GameCard from '@/components/GameCard';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import {
	fetchGamesFromCategory,
	Game,
	selectAllGames,
	selectGameError,
	selectGameStatus
} from '@/redux/gamesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoriesPage = () => {
	const { category } = useParams();

	const dispatch = useAppDispatch();
	const games = useAppSelector(selectAllGames);
	const status = useAppSelector(selectGameStatus);
	const error = useAppSelector(selectGameError);

	const [visibleGames, setVisibleGames] = useState<Game[]>(games.slice(0, 12));

	const toUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	useEffect(() => {
		dispatch(fetchGamesFromCategory(category!));
	}, [dispatch, category]);

	const sortByYear = (games: Game[]): void => {
		const sortedGames = [...games].sort(
			(a, b) =>
				new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
		);
		setVisibleGames(sortedGames.slice(0, 12));
	};

	if (status === 'pending') {
		return <Spinner />;
	} else if (status === 'failed') {
		return `Failed to fetch games with error: ${error}`;
	}

	return (
		<section className='py-5 container-center'>
			<h1 className='mb-4 ml-2 text-3xl font-bold text-blue-500 dark:text-purple-600'>
				All Free To Play Games | {toUpper(category!)} Category
			</h1>
			<div className='flex justify-start gap-2 my-2'>
				<Button
					onClick={() => sortByYear(games)}
					className='ml-0.5 px-2 py-1 text-sm font-semibold text-white bg-blue-500 rounded-md dark:bg-purple-600'
				>
					Sort By Year
				</Button>
			</div>
			<div className='grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3'>
				{visibleGames.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>
			<Pagination games={games} onClick={setVisibleGames} />
		</section>
	);
};

export default CategoriesPage;
