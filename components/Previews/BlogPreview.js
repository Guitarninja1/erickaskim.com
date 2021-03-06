import Link from 'next/link';
import BlogLink from '../BlogLink';
import Flavortext from '../Flavortext';
import ArrowRight from '../../public/arrowright.svg';
import styles from './BlogPreview.module.css';

export default function BlogPreview() {
	return (
		<div className={styles.BlogPreviewWrapper}>
			<div className={styles.BlogHeaderWrap}>
				<Flavortext title='Blog' />
				<h2 className={styles.Title}>The Latest News In Digital</h2>
				<Link href='#'>
					<a className={styles.BlogLink}>
						READ BLOG <ArrowRight className={styles.Arrow} />
					</a>
				</Link>
			</div>
			<div className={styles.BlogP}>
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
