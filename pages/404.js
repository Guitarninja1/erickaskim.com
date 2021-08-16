import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';

export default function FourZeroFour() {
	return (
		<div className='fourzerofour--wrapper'>
			<Header />
			<div className='fourzerofour--title-wrapper'>
				<h1 className='fourzerofour--title'>OOPS!</h1>
			</div>
			<Breadcrumbs page='404' />
			<div className='fourzerofour--error'>
				<h2 className='fourzerofour--h2'>404</h2>
				<h3 className='fourzerofour--h3'>Page not found</h3>
			</div>
			<div className='fourzerofour--search-wrapper'>
				<p className='fourzerofour--text'>
					It looks like nothing was found at this location. Maybe try a search?
				</p>
				<label htmlFor='search' className='sr-only'>
					Search
				</label>
				<input
					type='search'
					id='search'
					className='fourzerofour--search'
					placeholder='Search'
				/>
				<div className='fourzerofour--search-icon'>
					<Image src='/search.svg' alt='search' layout='fill' />
				</div>
			</div>
		</div>
	);
}
