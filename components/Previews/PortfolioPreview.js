import Image from 'next/image';
import Link from 'next/link';
import Flavortext from '../Flavortext';
import ArrowRight from '../../public/arrowright.svg';
import styles from './PortfolioPreview.module.css';

export default function PortfolioPreview() {
	return (
		<div className={styles.portfoliopreviewwrapper}>
			<Flavortext title='Portfolio' />
			<h2 className={styles.portfoliopreviewtitle}>Check Our Latest Cases</h2>
			<Link href='#'>
				<a className={styles.arrow1wrap}>
					View All <ArrowRight className={styles.arrow1} />
				</a>
			</Link>
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
			<div className={styles.caseswrap}>
				<h2 className={styles.casestitle}>CASES</h2>
			</div>
		</div>
	);
}
