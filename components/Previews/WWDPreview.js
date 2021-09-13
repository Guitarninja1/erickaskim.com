import Flavortext from '../Flavortext';
import WhatWeDo from '../WhatWeDo';
import styles from './WWDPreview.module.css';

export default function WWDPreview() {
	return (
		<div className={styles.wrapper}>
			<div className='wwdpreview--head'>
				<Flavortext title='What We Do' />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
					fringilla facilisis tortor non eleifend. Ut.
				</p>
			</div>
			<div className='wwdpreview--items'>
				<WhatWeDo
					title='Branding'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
					image='https://picsum.photos/200/300'
					imageAlt='alt'
				/>
				<WhatWeDo
					title='Strategy'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
					image='https://picsum.photos/200/300'
					imageAlt='alt'
				/>
				<WhatWeDo
					title='ECommerce'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
					image='https://picsum.photos/200/300'
					imageAlt='alt'
				/>
				<WhatWeDo
					title='Support'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
					image='https://picsum.photos/200/300'
					imageAlt='alt'
				/>
			</div>
		</div>
	);
}
