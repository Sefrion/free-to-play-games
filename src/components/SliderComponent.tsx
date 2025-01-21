import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import { Link } from 'react-router-dom';

import type { Game } from '@/redux/gamesSlice';
import { useEffect, useState } from 'react';

const Slide = ({ game }: { game: Game }) => (
	<CarouselItem className='sm:basis-1/2 xl:basis-1/3'>
		<Link
			to={`/game/${game.id}`}
			className='flex flex-col items-center justify-center gap-1 pb-1.5 overflow-hidden dark:bg-purple-600 bg-blue-500 text-white rounded-md shadow-md'
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
	const [visibleGames, setVisibleGames] = useState<Game[]>([]);

	useEffect(() => {
		sortByYear(games);
	}, [games]);

	const sortByYear = (games: Game[]): void => {
		const sortedGames = [...games].sort(
			(a, b) =>
				new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
		);
		setVisibleGames(sortedGames.slice(0, 5));
	};

	return (
		<section className='py-16 container-center'>
			<h2 className='my-2 text-3xl font-bold text-blue-500 dark:text-purple-600'>
				Latest Releases
			</h2>
			<Carousel opts={{ loop: true }}>
				<CarouselContent>
					{visibleGames.map((game) => (
						<Slide key={game.id} game={game} />
					))}
				</CarouselContent>
				<CarouselPrevious className='items-center justify-center hidden lg:flex' />
				<CarouselNext className='items-center justify-center hidden lg:flex' />
			</Carousel>
		</section>
	);
};

export default SliderComponent;
