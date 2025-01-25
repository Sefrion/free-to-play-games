import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
	fetchSingleGame,
	selectSingleGame,
	selectGameError,
	selectGameStatus
} from '@/redux/gamesSlice';
import Spinner from '@/components/Spinner';
import BackButton from '@/components/BackButton';
import Gallery from '@/components/Gallery';

const GamePage = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchSingleGame(+id!));
	}, [dispatch, id]);

	const game = useAppSelector(selectSingleGame);
	const status = useAppSelector(selectGameStatus);
	const error = useAppSelector(selectGameError);

	if (status === 'pending') {
		return <Spinner />;
	} else if (status === 'failed') {
		return `Failed to fetch games with error: ${error}`;
	}

	return (
		<section className='px-1 py-5 container-center'>
			<BackButton />
			<article className='flex flex-col items-start justify-center w-full gap-4 md:flex-row'>
				<div className='w-full md:w-1/2'>
					<img
						src={game?.thumbnail}
						alt='thumbnail'
						className='w-full min-w-full rounded-md'
					/>
				</div>
				<div className='w-full text-lg md:w-1/2'>
					<h1 className='mb-3 text-3xl font-semibold'>{game?.title}</h1>
					<p className='my-2'>{game?.short_description}</p>
					<p>Genre: {game?.genre}</p>
					<p>Platform: {game?.platform}</p>
					<p>Developer: {game?.developer}</p>
					<p>Publisher: {game?.publisher}</p>
					<p>Release Date: {game?.release_date}</p>
					<Link
						to={game?.game_url || ''}
						target='_blank'
						rel='noreferrer'
						className='block mt-4 text-blue-500 underline underline-offset-1'
					>
						Official Website
					</Link>
				</div>
			</article>
			<p className='my-2 text-lg'>{game?.description}</p>
			<div>
				<p className='text-xl font-semibold'>Minimal system requirements: </p>
				{game?.minimum_system_requirements && (
					<ul>
						<li>OS: {game?.minimum_system_requirements.os}</li>
						<li>Processor: {game?.minimum_system_requirements.processor}</li>
						<li>Memory: {game?.minimum_system_requirements.memory}</li>
						<li>Graphics: {game?.minimum_system_requirements.graphics}</li>
						<li>Storage: {game?.minimum_system_requirements.storage}</li>
					</ul>
				)}
			</div>
			<div className='flex flex-wrap items-center justify-center gap-1 mt-3 md:flex-nowrap'>
				{game?.screenshots.map((screenshot) => (
					<div className='cursor-pointer flex-1/3' key={screenshot.id}>
						<img
							onClick={() => {
								setIsOpen(true);
								window.scrollTo(0, 0);
								document.body.style.overflow = 'hidden';
							}}
							src={screenshot.image}
							alt='screenshot'
							className='my-2 rounded-md '
							loading='lazy'
						/>
					</div>
				))}
			</div>
			{isOpen && window.screen.width > 767 && (
				<Gallery
					images={game?.screenshots.map((game) => game.image) || []}
					opened={setIsOpen}
				/>
			)}
		</section>
	);
};

export default GamePage;
