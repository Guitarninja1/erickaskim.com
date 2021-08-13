import Image from 'next/image';
import Link from 'next/link';
import Triangle from '../svg/Triangle';

export default function PortfolioPreview() {
	return (
		<div className='portfoliopreview--wrapper'>
			<div className='flavortext--wrapper'>
				<Triangle />
				<h3 className='flavortext'>Portfolio</h3>
			</div>
			<h2>Check Our Latest Cases</h2>
			<Link href='#'>
				<a>View All ➡️</a>
			</Link>
			<Image
				src='https://picsum.photos/200/300'
				width='100%'
				height='100%'
				alt='rando'
			></Image>
			<Image
				src='https://picsum.photos/200/300'
				width='100%'
				height='100%'
				alt='rando'
			></Image>
			<Image
				src='https://picsum.photos/200/300'
				width='100%'
				height='100%'
				alt='rando'
			></Image>
		</div>
	);
}
