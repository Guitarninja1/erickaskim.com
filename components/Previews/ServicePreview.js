import Link from 'next/link';
import Flavortext from '../Flavortext';
import Service from '../Service';
import ArrowRight from '../../public/arrowright.svg';
import styles from './ServicePreview.module.css';

export default function ServicePreview() {
	return (
		<div className={styles.ServicePreviewWrapper}>
			<div className={styles.ServicePreviewHead}>
				<Flavortext title='Services' />
				<h2 className={styles.Title}>Develop Digital Products</h2>
				<p className={styles.Text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<div className={styles.LinkWrap}>
					<Link href='#'>
						<a className={styles.View}>
							VIEW ALL <ArrowRight className={styles.ArrowRight} />
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
