import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from './ui/carousel';
import { CirclePlusIcon } from 'lucide-react';
import { Button } from './ui/button';

interface GalleryProps {
	images: string[];
	opened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Gallery = ({ images, opened }: GalleryProps) => {
	return (
		<div className='absolute top-0 bottom-0 left-0 z-10 flex items-center justify-center w-full overflow-hidden bg-gray-900 bg-opacity-90'>
			<Button
				variant={'ghost'}
				className='absolute top-0 right-0 m-4 rotate-45'
				onClick={() => {
					opened(false);
					document.body.style.overflow = 'visible';
					window.scrollTo(100, 100);
				}}
			>
				<CirclePlusIcon className='text-white transform scale-150' />
			</Button>
			<div className='lg:w-3/4'>
				<Carousel opts={{ loop: true }}>
					<CarouselContent>
						{images.map((image, idx) => (
							<CarouselItem key={idx}>
								<img src={image} alt='screenshot' className='rounded-md' />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='items-center justify-center hidden lg:flex' />
					<CarouselNext className='items-center justify-center hidden lg:flex' />
				</Carousel>
			</div>
		</div>
	);
};

export default Gallery;
