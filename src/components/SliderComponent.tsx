import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

import type { Game } from '@/redux/gamesSlice';

const Slide = ({ game }: { game: Game }) => (
	<CarouselItem className='sm:basis-1/2 xl:basis-1/3'>
		<Link
			to={`/game/${game.id}`}
			className='flex flex-col items-center justify-center gap-1 pb-1.5 overflow-hidden dark:bg-red-500 bg-blue-500 text-white rounded-md shadow-md'
		>
			<div className='w-full'>
				<img className='w-full' src={game.thumbnail} alt='Slide Image' />
			</div>
			<div className='mt-2 text-center'>
				<h5 className='text-xl font-bold'>{game.title}</h5>
				<p>{game.genre}</p>
			</div>
		</Link>
	</CarouselItem>
);

const SliderComponent = ({ games }: { games: Game[] }) => {
	const gamesArr = games.slice(0, 7);

	return (
		<section>
			<Carousel opts={{ loop: true }} className='py-16 container-center'>
				<CarouselContent>
					{gamesArr.map((game) => (
						<Slide key={game.id} game={game} />
					))}
				</CarouselContent>
				<CarouselPrevious className='hidden lg:block' />
				<CarouselNext className='hidden lg:block' />
			</Carousel>
		</section>
	);
};

export default SliderComponent;
