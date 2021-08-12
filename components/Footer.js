import Link from 'next/link';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className='footer--wrapper'>
			<div className='footer--menu'>
				<h2 className='footer--title'>Erick Askim</h2>
				<ul className='footer--menu__ul'>
					<li>
						<Link href='/'>
							<p>Home</p>
						</Link>
					</li>
					<p className='footer--social__line'>─</p>
					<li>
						<Link href='/about'>
							<p>About</p>
						</Link>
					</li>
					<p className='footer--social__line'>─</p>
					<li>
						<Link href='/'>
							<p>Services</p>
						</Link>
					</li>
					<p className='footer--social__line'>─</p>

					<li>
						<Link href='/'>
							<p>Portfolio</p>
						</Link>
					</li>
					<p className='footer--social__line'>─</p>
					<li>
						<Link href='/blog'>
							<p>Blog</p>
						</Link>
					</li>
					<p className='footer--social__line'>─</p>
					<li>
						<Link href='/contact'>
							<p>Contact</p>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer--info'>
				<div className='footer--address'>
					<address className='footer--address-wrap'>
						<h3 className='footer--h3'>Address:</h3>
						<p className='footer--p'>536 W La Strada Circle, Medford,</p>
						<p className='footer--p'>OR 96504, USA</p>
					</address>
				</div>
				<div className='footer--contact'>
					<h3 className='footer--h3'>Contact</h3>
					<p className='footer--p'>+1 530 828 2706</p>
					<p className='footer--p'>erickaskim@gmail.com</p>
				</div>
				<div className='footer--usefull-links'>
					<h3 className='footer--h3'>Usefull Links</h3>
					<Link href='/'>
						<a className='footer--link'>Help And Support</a>
					</Link>
					<Link href='/'>
						<a className='footer--link'>Careers</a>
					</Link>
				</div>
			</div>
			<div className='footer--social'>
				<Link href='/'>
					<a className='footer--social-link'>Fb</a>
				</Link>
				<p className='footer--social__line'>─</p>
				<Link href='/'>
					<a className='footer--social-link'>Tw</a>
				</Link>
				<p className='footer--social__line'>─</p>
				<Link href='/'>
					<a className='footer--social-link'>In</a>
				</Link>
			</div>
			<div className='footer--copyright'>
				<p>&copy; All rights reserved. Erick Askim {year}</p>
			</div>
		</div>
	);
}
