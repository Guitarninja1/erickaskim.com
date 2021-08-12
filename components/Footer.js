import Link from 'next/link';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className='footer--wrapper'>
			<div className='footer--menu'>
				<h2 className='footer--title'>Erick Askim</h2>
				<ul className='footer--menu-ul'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/'>Services</Link>
					</li>
					<li>
						<Link href='/'>Portfolio</Link>
					</li>
					<li>
						<Link href='/blog'>Blog</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
			<div className='footer--info'>
				<div className='footer--address'>
					<h3 className='footer--h3'>Address:</h3>
					<address className='footer--p'>
						536 W La Strada Circle, Medford, OR 96504, USA
					</address>
				</div>
				<div className='footer--contact'>
					<h3 className='footer--h3'>Contact</h3>
					<Link href='tel:+15308282706' className='footer--p'>
						+1 530 828 2706
					</Link>
					<Link href='mailto:erickaskim@gmail.com' className='footer--p'>
						erickaskim@gmail.com
					</Link>
				</div>
				<div className='footer--usefull-links'>
					<h3 className='footer--h3'>Usefull Links</h3>
					<Link href='/'>Help And Support</Link>
					<Link href='/'>Careers</Link>
				</div>
			</div>
			<div className='footer--social'>
				<Link href='/'>
					<a className='footer--social-link'>Fb</a>
				</Link>
				<Link href='/'>
					<a className='footer--social-link'>Tw</a>
				</Link>
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
