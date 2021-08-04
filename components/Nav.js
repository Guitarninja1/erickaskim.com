import Link from 'next/link';
import ExitB from './ExitB';
import MagGlass from './MagGlass';

export default function Nav(props) {
	const { open, setOpen } = props;
	return (
		<nav
			className={`nav--menu ${
				open ? 'nav--menu__on_screen' : 'nav--menu__off_screen'
			}`}
		>
			<button className='exit-button' onClick={() => setOpen(!open)}>
				<ExitB />
			</button>
			<ul>
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
				<input
					className='search'
					type='search'
					defaultValue='Search...                 '
				></input>
			</ul>
		</nav>
	);
}
