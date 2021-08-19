import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Erick Askim</h2>
			<div className={styles.menuwrapper}>
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
							<a className={styles.menulicon}>Contact</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className='footer--info'>
				<div className={styles.address}>
					<h3 className={styles.hthree}>Address:</h3>
					<address className={styles.alink}>
						536 W La Strada Circle, Medford,
					</address>
					<address className={styles.alink}>OR 96504, USA</address>
				</div>
				<div className={styles.contact}>
					<h3 className={styles.hthree}>Contact</h3>
					<Link href='tel:+15308282706'>
						<a className={styles.alink}>+1 530 828 2706</a>
					</Link>
					<Link href='mailto:erickaskim@gmail.com'>
						<a className={styles.alink}>erickaskim@gmail.com</a>
					</Link>
				</div>
				<div className={styles.usefull}>
					<h3 className={styles.hthree}>Usefull Links</h3>
					<Link href='/'>
						<a className={styles.alink}>Help And Support</a>
					</Link>
					<Link href='/'>
						<a className={styles.alink}>Careers</a>
					</Link>
				</div>
			</div>
			<div className={styles.social}>
				<Link href='/'>
					<a className={styles.sociallink}>Fb</a>
				</Link>
				<Link href='/'>
					<a className={styles.sociallink}>Tw</a>
				</Link>
				<Link href='/'>
					<a className={styles.sociallinkin}>In</a>
				</Link>
			</div>
			<div className={styles.copyright}>
				<p>&copy; All rights reserved. Erick Askim {year}</p>
			</div>
		</div>
	);
}
