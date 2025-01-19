import { Game } from '@/redux/gamesSlice';
import { Button } from './ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
	games: Game[];
	onClick: React.Dispatch<React.SetStateAction<Game[]>>;
}

const Pagination = ({ games, onClick }: PaginationProps) => {
	const gamesPerPage = 9;
	const totalPages = Math.ceil(games.length / gamesPerPage);
	const [currentPage, setCurrentPage] = useState(1);

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

	const currentGames = games.slice(
		(currentPage - 1) * gamesPerPage,
		currentPage * gamesPerPage
	);

	return (
		<div className='flex items-center justify-center my-3 '>
			<Button
				onClick={() => {
					handlePageChange(currentPage - 1);
					onClick(currentGames);
				}}
				disabled={currentPage === 1}
				className='mr-2 text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'
			>
				<ChevronLeft />
			</Button>
			{getVisiblePageNumbers().map((page) => (
				<Button
					key={page}
					onClick={() => {
						handlePageChange(page);
						onClick(currentGames);
					}}
					className={cn(
						currentPage === page
							? 'bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'
							: 'text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'
					)}
				>
					{page}
				</Button>
			))}
			<Button
				onClick={() => {
					handlePageChange(currentPage + 1);
					onClick(currentGames);
				}}
				disabled={currentPage === totalPages}
				className='ml-2 text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500'
			>
				<ChevronRight />
			</Button>
		</div>
	);
};

export default Pagination;
