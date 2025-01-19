import { Game } from '@/redux/gamesSlice';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card className='flex flex-col overflow-hidden text-white bg-blue-500 '>
			<img src={game.thumbnail} alt='game thumbnail' className='w-full' />
			<CardContent className='flex-grow'>
				<CardTitle className='my-2 text-xl font-bold'>{game.title}</CardTitle>
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
