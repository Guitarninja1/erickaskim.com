import Link from 'next/link';
import BlogLink from '../BlogLink';
import Triangle from '../svg/Triangle';

export default function BlogPreview() {
	return (
		<div className='blogpreview--wrapper'>
			<div className='blogpreview--head'>
				<div className='flavortext--wrapper'>
					<Triangle />
					<h3 className='flavortext'>Blog</h3>
				</div>
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
