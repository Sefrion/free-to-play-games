import { Game } from '@/redux/gamesSlice';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
	games: Game[];
	onClick: React.Dispatch<React.SetStateAction<Game[]>>;
}

const Pagination = ({ games, onClick }: PaginationProps) => {
	const gamesPerPage = 12;
	const totalPages = Math.ceil(games.length / gamesPerPage);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const start = (currentPage - 1) * gamesPerPage;
		const end = currentPage * gamesPerPage;
		onClick(games.slice(start, end));
	}, [currentPage, games, gamesPerPage, onClick]);

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const getVisiblePageNumbers = () => {
		const start = Math.max(1, currentPage - 1);
		const end = Math.min(totalPages, start + 2);
		return Array.from({ length: end - start + 1 }, (_, index) => start + index);
	};

	return (
		<div className='flex items-center justify-center my-3 '>
			<Button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className='mr-2 text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'
			>
				<ChevronLeft />
			</Button>
			{getVisiblePageNumbers().map((page) => (
				<Button
					key={page}
					onClick={() => handlePageChange(page)}
					className={cn(
						currentPage === page
							? 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white mx-0.5'
							: 'text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 mx-0.5'
					)}
				>
					{page}
				</Button>
			))}
			<Button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className='ml-2 text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'
			>
				<ChevronRight />
			</Button>
		</div>
	);
};

export default Pagination;
