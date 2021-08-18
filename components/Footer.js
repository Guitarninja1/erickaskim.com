import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className={styles.wrapper}>
			<div className='footer--menu'>
				<h2 className={styles.title}>Erick Askim</h2>
				<ul className={styles.menu}>
					<li>
						<Link href='/'>
							<a className={styles.menuli}>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className={styles.menuli}>About</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a className={styles.menuli}>Services</a>
						</Link>
					</li>
					<li>
						<Link href='/'>
							<a className={styles.menuli}>Portfolio</a>
						</Link>
					</li>
					<li>
						<Link href='/blog'>
							<a className={styles.menuli}>Blog</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a className={styles.menuli}>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer--info'>
				<div className={styles.address}>
					<h3 className='footer--h3'>Address:</h3>
					<address className='footer--p'>
						536 W La Strada Circle, Medford, OR 96504, USA
					</address>
				</div>
				<div className={styles.contact}>
					<h3 className='footer--h3'>Contact</h3>
					<Link href='tel:+15308282706'>
						<a className='footer--p'>+1 530 828 2706</a>
					</Link>
					<Link href='mailto:erickaskim@gmail.com'>
						<a className='footer--p'>erickaskim@gmail.com</a>
					</Link>
				</div>
				<div className={styles.usefull}>
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
