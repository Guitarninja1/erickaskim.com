import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function FourZeroFour() {
	return (
		<div className='fourzerofour--wrapper'>
			<Header />
			<div className='fourzerofour--title-wrapper'>
				<h1 className='fourzerofour--title'>OOPS!</h1>
			</div>
			<ul className='fourzerofour--ul'>
				<li>
					<Link href='/'>
						<a className='fourzerofour--li-home'>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/'>
						<a className='fourzerofour--li'>404</a>
					</Link>
				</li>
			</ul>
			<div className='fourzerofour--error'>
				<h2 className='fourzerofour--h2'>404</h2>
				<h3 className='fourzerofour--h3'>Page not found</h3>
			</div>
			<div className='fourzerofour--search-wrapper'>
				<p>
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
				<button type='submit' className='fourzerofour--search-button'>
					<Image src='/search.svg' alt='search' layout='fill' />
				</button>
			</div>
		</div>
	);
}
