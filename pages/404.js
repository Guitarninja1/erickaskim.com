import Image from 'next/image';
import Link from 'next/link';

export default function FourZeroFour() {
	return (
		<div className='fourzerofour--wrapper'>
			<h1 className='fourzerofour--title'>OOPS!</h1>
			<ul className='fourzerofour--ul'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/'>404</Link>
				</li>
			</ul>
			<div className='fourzerofour--error'>
				<h2 className='fourzerofour--h2'>404</h2>
				<h3 className='fourzerofour--h3'>Page not found</h3>
			</div>
			<p>
				It looks like nothing was found at this location. Maybe try a search?
			</p>
			<label htmlFor='search' hidden>
				Search
			</label>
			<input type='search' id='search' placeholder='Search' />
		</div>
	);
}
