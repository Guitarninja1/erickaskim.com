import Link from 'next/link';
import Service from '../Service';
import Triangle from '../svg/Triangle';

export default function ServicePreview() {
	return (
		<div className='servicepreview--wrapper'>
			<div className='servicepreview--head'>
				<div className='triangle'>
					<Triangle />
				</div>
				<h3 className='servicepreview--flavortext'>Digital Dominance</h3>
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
