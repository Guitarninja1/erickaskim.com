import Link from 'next/link';
import Service from '../components/Service';
import Triangle from '../components/svg/Triangle';

export default function services() {
	return (
		<div className='service--wrapper'>
			<div className='services--head'>
				<div className='triangle'>
					<Triangle />
				</div>

				<h3 className='services--flavortext'>Digital Dominance</h3>
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
