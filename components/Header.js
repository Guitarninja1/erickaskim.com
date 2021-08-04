import Nav from './Nav';
import { useState } from 'react';
import Bmenu from './Bmenu.js';
import Call from './Call';

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header>
			<Nav open={open} setOpen={setOpen} />
			<button className='bmenu' onClick={() => setOpen(!open)}>
				<Bmenu />
			</button>
			<h2 className='ea-title'>Erick Askim</h2>
			<button className='call'>
				<Call />
			</button>
		</header>
	);
}
