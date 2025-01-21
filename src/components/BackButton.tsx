import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<Button
			onClick={handleBack}
			className='my-2 text-white bg-blue-500 dark:bg-purple-600 dark:text-white dark:border-purple-600 dark:hover:bg-white dark:hover:text-purple-600 dark:hover:border dark:hover:border-purple-600 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'
		>
			<ChevronLeft className='-mr-0.5' />
			Back
		</Button>
	);
};

export default BackButton;
