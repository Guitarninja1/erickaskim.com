import Link from 'next/link';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className='footer--wrapper'>
			<div className='footer--menu'>
				<h2 className='footer--title'>Erick Askim</h2>
				<ul className='footer--menu-ul'>
					<li>
						<Link href='/'>
							<a className='footer--p'>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className='footer--p'>About</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a className='footer--p'>Services</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a className='footer--p'>Portfolio</a>
						</Link>
					</li>
					<li>
						<Link href='/blog'>
							<a className='footer--p'>Blog</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a className='footer--p'>Contact</a>
						</Link>
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
					<Link href='tel:+15308282706'>
						<a className='footer--p'>+1 530 828 2706</a>
					</Link>
					<Link href='mailto:erickaskim@gmail.com'>
						<a className='footer--p'>erickaskim@gmail.com</a>
					</Link>
				</div>
				<div className='footer--usefull-links'>
					<h3 className='footer--h3'>Usefull Links</h3>
					<Link href='/'>
						<a className='footer--p'>Help And Support</a>
					</Link>
					<Link href='/'>
						<a className='footer--p'>Careers</a>
					</Link>
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
