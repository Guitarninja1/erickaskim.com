import Flavortext from '../Flavortext';
import WhatWeDo from '../WhatWeDo';
import styles from './WWDPreview.module.css';

export default function WWDPreview() {
	return (
		<div className={styles.Wrapper}>
			<div className='wwdpreview--head'>
				<Flavortext title='What We Do' />
				<h2 className={styles.PageTitle}>We Develop Digital Products</h2>
				<p className={styles.Text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
					fringilla facilisis tortor non eleifend. Ut.
				</p>
			</div>
			<div className={styles.WhatWeDoWrap}>
				<WhatWeDo
					percent={67}
					title='Branding'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
				/>
				<WhatWeDo
					percent={87}
					title='Strategy'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				/>
				<WhatWeDo
					percent={85}
					title='ECommerce'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				/>
				<WhatWeDo
					percent={95}
					title='Support'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				/>
			</div>
		</div>
	);
}
