import { useParams } from 'react-router-dom';

const GamePage = () => {
	const { id } = useParams();

	return <div className='container-center'>GamePage: {id}</div>;
};

export default GamePage;
