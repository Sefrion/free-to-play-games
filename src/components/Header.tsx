import { Link } from 'react-router-dom';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem
} from './ui/navigation-menu';
import { Separator } from './ui/separator';

const Header = () => {
	return (
		<header className='w-full px-4 py-4 text-white bg-blue-500'>
			<div className='container-center'>
				<div className='flex items-center'>
					<Link to='/' className='text-3xl italic font-bold'>
						FreeToPlay
					</Link>
					<Separator orientation='vertical' className='mx-5' />
					<NavigationMenu>
						<NavigationMenuList className='gap-2'>
							<NavigationMenuItem className='p-2 border rounded-md hover:bg-white hover:text-black'>
								<Link to='/'>Home</Link>
							</NavigationMenuItem>
							<NavigationMenuItem className='p-2 border rounded-md hover:bg-white hover:text-black'>
								<Link to='/categories'>Categories</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</header>
	);
};

export default Header;
