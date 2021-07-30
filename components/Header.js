import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<Link href='/'>Erick Askim</Link>
			<Nav />
		</header>
	);
}
