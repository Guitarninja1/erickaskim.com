import styles from './Portfolio.module.css';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import InTouch from '../components/InTouch';
import Link from 'next/link';
import Arrowright from '../public/arrowRightWhite.svg';
import Image from 'next/image';

export default function Portfolio() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<h2 className={styles.title}>Portfolio</h2>
			<Breadcrumbs page='Portfolio' />
			<div className={styles.mainimagewrap}>
				<div className={styles.imagewrap}>
					<Image src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
				<div className={styles.imagewrap}>
					<Image src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
				<div className={styles.imagewrap}>
					<Image src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
			</div>
			<Link href='/'>
				<a className={styles.more}>
					VIEW MORE CASES
					<div className={styles.arrow}>
						<Arrowright />
					</div>
				</a>
			</Link>
			<InTouch />
		</div>
	);
}
