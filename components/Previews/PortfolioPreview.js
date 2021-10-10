import Image from 'next/image';
import Link from 'next/link';
import Flavortext from '../Flavortext';
import ArrowRight from '../../public/arrowright.svg';
import styles from './PortfolioPreview.module.css';

export default function PortfolioPreview() {
	return (
		<div className={styles.PortfolioPreviewWrapper}>
			<Flavortext title='Portfolio' />
			<h2 className={styles.PortfolioPreviewTitle}>Check Our Latest Cases</h2>
			<Link href='#'>
				<a className={styles.ViewArrowWrap}>
					View All <ArrowRight className={styles.Arrow} />
				</a>
			</Link>
			<div className={styles.MainImageWrap}>
				<div className={styles.ImageWrap}>
					<Image src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
				<div className={styles.ImageWrap}>
					<Image src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
				<div className={styles.ImageWrap}>
					<Image src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
			</div>
			<div className={styles.CasesWrap}>
				<h2 className={styles.CasesTitle}>CASES</h2>
			</div>
		</div>
	);
}
