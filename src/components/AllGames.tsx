import { Game } from '@/redux/gamesSlice';
import GameCard from './GameCard';

interface AllGamesProps {
	games: Game[];
}

const AllGames = ({ games }: AllGamesProps) => {
	const someGames = games.slice(8, 15);

	return (
		<section className='py-5 container-center'>
			<h1 className='mb-4 ml-2 text-3xl font-bold text-blue-500'>
				All Free To Play Games | Library
			</h1>
			<div className='grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3'>
				{someGames.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>
		</section>
	);
};

export default AllGames;
