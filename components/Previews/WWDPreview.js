import Triangle from '../svg/Triangle';
import WhatWeDo from '../WhatWeDo';

export default function WWDPreview() {
	return (
		<div className='wwdpreview--wrapper'>
			<div className='wwdpreview--head'>
				<Triangle />
				<h3 className='wwdpreview--digital__flavortxt'>What We Do</h3>
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