import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center justify-center focus:outline-none'>
				Category <ChevronDown />
			</DropdownMenuTrigger>
			<DropdownMenuContent className='border border-black '>
				<DropdownMenuItem className='cursor-pointer'>
					<Link to='/categories/mmorpg'>MMORPG</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='cursor-pointer'>
					<Link to='/categories/shooter'>Shooter</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='cursor-pointer'>
					<Link to='/categories/action-rpg'>Action RPG</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='cursor-pointer'>
					<Link to='/categories/strategy'>Strategy</Link>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default CategoryDropdown;
