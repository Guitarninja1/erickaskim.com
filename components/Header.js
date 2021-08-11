import Nav from './Nav';
import { useState } from 'react';
import Bmenu from './svg/Bmenu.js';
import Call from './svg/Call';

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header>
			<Nav open={open} setOpen={setOpen} />
			<button className='header--menu' onClick={() => setOpen(!open)}>
				<Bmenu />
			</button>
			<h2 className='header--title'>Erick Askim</h2>
			<button className='header--call'>
				<a href='tel:+15308282706'>
					<Call />
				</a>
			</button>
		</header>
	);
}
