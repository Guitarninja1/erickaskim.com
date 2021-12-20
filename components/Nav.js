import Link from 'next/link';
import ExitB from './svg/ExitB';
import styles from './Nav.module.css';

export default function Nav(props) {
	const { open, setOpen } = props;
	return (
		<nav className={`${styles.menu} ${open ? styles.on : styles.off}`}>
			<button className={styles.exit} onClick={() => setOpen(!open)}>
				<ExitB />
			</button>
			<ul className={styles.list}>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
				{/* <li>
					<Link href='/post'>Post</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li> */}
				<li>
					<Link href='/portfolio'>Portfolio</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
				{/* <li>
					<input
						className={styles.search}
						type='search'
						placeholder='Search'
					></input>
				</li> */}
			</ul>
		</nav>
	);
}
