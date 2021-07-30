import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<div className='header'>
				<Link href='/'>Erick Askim</Link>
			</div>
			<Nav />
		</header>
	);
}
