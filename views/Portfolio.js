import styles from './Portfolio.module.css';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import InTouch from '../components/InTouch';
import Link from 'next/link';
import Arrowright from '../public/arrowright.svg';
import Image from 'next/image';

export default function Portfolio() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pagetitlewrapper}>
				<h2 className={styles.pagetitle}>PORTFOLIO</h2>
				<div className={styles.breadcrumbs}>
					<Breadcrumbs page='Portfolio' />
				</div>
			</div>
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
					<span>
						<Arrowright className={styles.arrow} />
					</span>
				</a>
			</Link>
			<InTouch />
		</div>
	);
}
