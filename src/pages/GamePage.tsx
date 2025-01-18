import { useParams, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/redux/hooks';
import { selectSingleGameById } from '@/redux/gamesSlice';
import { useEffect } from 'react';

const GamePage = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const game = useAppSelector((state) =>
		selectSingleGameById(state, Number(id))
	);

	useEffect(() => {
		if (!game) {
			navigate('/');
		}
	}, [game, navigate]);

	return <div className='container-center'>GamePage: {game?.title}</div>;
};

export default GamePage;
