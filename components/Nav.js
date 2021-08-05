import Link from 'next/link';
import ExitB from './ExitB';

export default function Nav(props) {
	const { open, setOpen } = props;
	return (
		<nav
			className={`nav--menu ${
				open ? 'nav--menu__on_screen' : 'nav--menu__off_screen'
			}`}
		>
			<button className='nav--exit__button' onClick={() => setOpen(!open)}>
				<ExitB />
			</button>
			<ul className='nav--list'>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				<li>
					<Link href='/about'>About Me</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
				<li>
					<input
						className='nav--search'
						type='search'
						defaultValue='Search...'
					></input>
				</li>
			</ul>
		</nav>
	);
}
