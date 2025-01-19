import { Game } from '@/redux/gamesSlice';
import GameCard from './GameCard';
import Pagination from './Pagination';
import { useState } from 'react';

interface AllGamesProps {
	games: Game[];
}

const AllGames = ({ games }: AllGamesProps) => {
	const [visibleGames, setVisibleGames] = useState(games.slice(0, 9));

	return (
		<section className='py-5 container-center'>
			<h1 className='mb-4 ml-2 text-3xl font-bold text-blue-500'>
				All Free To Play Games | Library
			</h1>
			<div className='grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3'>
				{visibleGames.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>
			<Pagination games={games} onClick={setVisibleGames} />
		</section>
	);
};

export default AllGames;
