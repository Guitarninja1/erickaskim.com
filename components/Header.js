import Nav from './Nav';
import { useState } from 'react';
import Bmenu from './Bmenu.js';
import Call from './Call';

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header>
			<Nav open={open} setOpen={setOpen} />
			<button className='header--menu__button' onClick={() => setOpen(!open)}>
				<Bmenu />
			</button>
			<h2 className='header--title'>Erick Askim</h2>
			<button className='header--call__button'>
				<Call />
			</button>
		</header>
	);
}
