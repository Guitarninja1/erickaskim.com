import Link from 'next/link';
import Flavortext from '../components/Flavortext';
import Service from '../components/Service';

export default function services() {
	return (
		<div className='services--wrapper'>
			<div className='services--head'>
				<Flavortext title='Services' />
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
