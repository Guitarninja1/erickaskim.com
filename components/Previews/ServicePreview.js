import Link from 'next/link';
import Flavortext from '../Flavortext';
import Service from '../Service';

export default function ServicePreview() {
	return (
		<div className='servicepreview--wrapper'>
			<div className='servicepreview--head'>
				<Flavortext title='Services' />
				<h2>Develop Digital Products</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
					fringilla facilisis tortor non eleifend. Ut.
				</p>
				<Link href='#'>
					<a>View All ➡️</a>
				</Link>
			</div>
			<Service
				imageSrc='https://picsum.photos/200/300'
				imageAlt='#'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
				link='#'
				title='Web Development'
			/>
			<Service
				imageSrc='https://picsum.photos/200/300'
				imageAlt='#'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
				link='#'
				title='SEO Optomization'
			/>
			<Service
				imageSrc='https://picsum.photos/200/300'
				imageAlt='#'
				text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
				link='#'
				title='Ui/UX Design'
			/>
		</div>
	);
}
