import { Link } from 'react-router-dom';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem
} from './ui/navigation-menu';
// import { Separator } from './ui/separator';
import CategoryDropdown from './CategoryDropdown';
import { ModeToggle } from './ModeToggle';

const Header = () => {
	return (
		<header className='w-full px-4 py-4 text-white bg-blue-500 dark:bg-purple-600'>
			<div className='container-center'>
				<div className='flex items-center justify-between'>
					<Link to='/' className='text-3xl italic font-bold'>
						FreeToPlay
					</Link>
					{/* <Separator orientation='vertical' className='mx-5' /> */}
					<NavigationMenu className='mr-5'>
						<NavigationMenuList className='gap-2 '>
							<NavigationMenuItem className='p-2 transition-all ease-linear border rounded-md dark:border-white hover:bg-white hover:text-black '>
								<Link to='/'>Home</Link>
							</NavigationMenuItem>
							<NavigationMenuItem className='p-2 transition-all ease-linear border rounded-md dark:border-white hover:bg-white hover:text-black'>
								<CategoryDropdown />
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
};

export default Header;
