import Image from 'next/image';
import Link from 'next/link';
import Flavortext from '../Flavortext';

export default function PortfolioPreview() {
	return (
		<div className='portfoliopreview--wrapper'>
			<Flavortext title='Portfolio' />
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
