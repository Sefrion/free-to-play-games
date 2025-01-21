import { Game } from '@/redux/gamesSlice';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card className='flex flex-col overflow-hidden text-white bg-blue-500 dark:bg-purple-600'>
			<img src={game.thumbnail} alt='game thumbnail' className='w-full' />
			<CardContent className='flex-grow'>
				<Link to={`/game/${game.id}`}>
					<CardTitle className='my-2 text-xl font-bold hover:underline'>
						{game.title}
					</CardTitle>
				</Link>
				<p>
					<span className='font-semibold'>Platform:</span> {game.platform}
				</p>
				<p>{game.short_description}</p>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<span>
					<span className='font-semibold'>Year:</span>{' '}
					{game.release_date.substring(0, 4)}
				</span>
				<span>
					<span className='font-semibold'>Developer:</span> {game.developer}
				</span>
			</CardFooter>
		</Card>
	);
};

export default GameCard;
