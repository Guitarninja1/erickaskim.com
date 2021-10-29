import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import Link from 'next/link';
import Arrowright from '../public/arrowright.svg';
import styles from './Portfolio.module.css';

export default function Portfolio() {
	return (
		<div className={styles.Wrapper}>
			<Header />
			<div className={styles.PageTitleWrapper}>
				<h2 className={styles.PageTitle}>PORTFOLIO</h2>
				<div className={styles.Breadcrumbs}>
					<Breadcrumbs page='Portfolio' />
				</div>
			</div>
			<div className={styles.MainImageWrap}>
				<div className={styles.ImageWrap}>
					<img src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
				<div className={styles.ImageWrap}>
					<img src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
				<div className={styles.ImageWrap}>
					<img src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
			</div>
			<Link href='/'>
				<a className={styles.More}>
					VIEW MORE CASES
					<span>
						<Arrowright className={styles.Arrow} />
					</span>
				</a>
			</Link>
		</div>
	);
}
