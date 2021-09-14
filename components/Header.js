import Nav from './Nav';
import { useState } from 'react';
import Bmenu from './svg/Bmenu.js';
import Call from './svg/Call';
import styles from './Header.module.css';

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header>
			<Nav open={open} setOpen={setOpen} />
			<button className={styles.Menu} onClick={() => setOpen(!open)}>
				<Bmenu />
			</button>
			<h2 className={styles.Title}>Erick Askim</h2>
			<button className={styles.Call}>
				<a href='tel:+15308282706'>
					<Call />
				</a>
			</button>
		</header>
	);
}
