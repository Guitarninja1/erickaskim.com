import Link from 'next/link';
import Flavortext from '../Flavortext';
import Service from '../Service';
import ArrowRight from '../../public/arrowright.svg';
import styles from './ServicePreview.module.css';

export default function ServicePreview() {
	return (
		<div className={styles.servicepreviewwrapper}>
			<div className={styles.servicepreviewhead}>
				<Flavortext title='Services' />
				<h2 className={styles.title}>Develop Digital Products</h2>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div className={styles.linkwrap}>
					<Link href='#'>
						<a className={styles.view}>
							VIEW ALL <ArrowRight className={styles.arrow} />
						</a>
					</Link>
				</div>
			</div>
			<Service
				imageSrc='/WebDevIcon.svg'
				imageAlt='#'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
				link='#'
				title='Web Development'
			/>
			<Service
				imageSrc='/seo.svg'
				imageAlt='#'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
				link='#'
				title='SEO Optomization'
			/>
			<Service
				imageSrc='/uiux.svg'
				imageAlt='#'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
				link='#'
				title='Ui/UX Design'
			/>
		</div>
	);
}
