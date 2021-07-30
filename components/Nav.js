import Link from 'next/link';

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/about'>About Me</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
}
