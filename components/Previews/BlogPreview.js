import Link from 'next/link';
import BlogLink from '../BlogLink';
import Flavortext from '../Flavortext';

export default function BlogPreview() {
	return (
		<div className='blogpreview--wrapper'>
			<div className='blogpreview--head'>
				<Flavortext title='Blog' />
				<h2>The Latest News In Digital</h2>
				<Link href='#'>READ BLOG ➡️</Link>
			</div>
			<div className='blogpreview--body'>
				<BlogLink
					image='https://picsum.photos/200/300'
					imageAlt='alt'
					name='Erick Askim'
					date='Aug 9, 2021'
					share='#'
					title='Lorem Ipsum'
					link='#'
				/>
				<BlogLink
					image='https://picsum.photos/200/300'
					imageAlt='alt'
					name='Erick Askim'
					date='Aug 9, 2021'
					share='#'
					title='Lorem Ipsum'
					link='#'
				/>
				<BlogLink
					image='https://picsum.photos/200/300'
					imageAlt='alt'
					name='Erick Askim'
					date='Aug 9, 2021'
					share='#'
					title='Lorem Ipsum'
					link='#'
				/>
			</div>
		</div>
	);
}
