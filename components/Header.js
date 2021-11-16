import Nav from './Nav';
import { useState } from 'react';
import Bmenu from './svg/Bmenu.js';
import Call from './svg/Call';
import styles from './Header.module.css';
import Cell from '../public/cellphone.svg';

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
			<button className={styles.Cell}>
				<a className={styles.Cell} href='tel:+15308282706'>
					<Cell className={styles.CellImage} />
					<p className={styles.number}>+1 530 828 2706</p>
				</a>
			</button>
		</header>
	);
}
