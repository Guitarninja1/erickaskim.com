import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<div className={styles.Wrapper}>
			<div className={styles.Container}>
				<div className={styles.MenuWrap2}>
					<h2 className={styles.Title}>Erick Askim</h2>
					<div className={styles.MenuWrapper}>
						<ul className={styles.Menu}>
							<li className={styles.Li}>
								<Link href='/'>
									<a className={styles.MenuItem}>Home</a>
								</Link>
							</li>
							{/* <li className={styles.Li}>
						<Link href='/about'>
							<a className={styles.MenuItem}>About</a>
						</Link>
					</li> */}
							<li className={styles.Li}>
								<Link href='/portfolio'>
									<a className={styles.MenuItem}>Portfolio</a>
								</Link>
							</li>
							<li className={styles.Li}>
								<Link href='/blog'>
									<a className={styles.MenuItem}>Blog</a>
								</Link>
							</li>
							<li className={styles.Li}>
								<Link href='/contact'>
									<a className={styles.MenuItem}>Contact</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.FooterWrapper}>
					<div className={styles.Footer}>
						<div className={styles.Address}>
							<h3 className={styles.H3}>Address:</h3>
							<address className={styles.Link}>
								536 W La Strada Circle, Medford,
								<br />
								OR 96504, USA
							</address>
						</div>
						<div className={styles.Contact}>
							<h3 className={styles.H3}>Contact</h3>
							<Link href='tel:+15308282706'>
								<a className={styles.Link}>+1 530 828 2706</a>
							</Link>
							<Link href='mailto:erickaskim@gmail.com'>
								<a className={styles.Link}>erickaskim@gmail.com</a>
							</Link>
						</div>
					</div>
					<div className={styles.Social}>
						<Link href='https://www.facebook.com/erick.askim.3/'>
							<a className={styles.SocialLink}>Fb</a>
						</Link>
						<Link href='https://twitter.com/ErickAskim'>
							<a className={styles.SocialLink}>Tw</a>
						</Link>
						<Link href='https://www.linkedin.com/in/erick-askim'>
							<a className={styles.SocialLink}>in</a>
						</Link>
					</div>
					<div className={styles.Copyright}>
						<p>&copy; All rights reserved. Erick Askim {year}</p>
					</div>
				</div>
				<div className={styles.FooterWrapper2}>
					<div className={styles.Footer2}>
						<div className={styles.Social}>
							<Link href='https://www.facebook.com/erick.askim.3/'>
								<a className={styles.SocialLink}>Fb</a>
							</Link>
							<Link href='https://twitter.com/ErickAskim'>
								<a className={styles.SocialLink}>Tw</a>
							</Link>
							<Link href='https://www.linkedin.com/in/erick-askim'>
								<a className={styles.SocialLink}>in</a>
							</Link>
						</div>
						<div className={styles.Copyright}>
							<p>&copy; All rights reserved. Erick Askim {year}</p>
						</div>
					</div>
					<div className={styles.Address}>
						<h3 className={styles.H3}>Address:</h3>
						<address className={styles.Link}>
							536 W La Strada Circle, Medford,
							<br />
							OR 96504, USA
						</address>
					</div>
					<div className={styles.Contact}>
						<h3 className={styles.H3}>Contact</h3>
						<Link href='tel:+15308282706'>
							<a className={styles.Link}>+1 530 828 2706</a>
						</Link>
						<Link href='mailto:erickaskim@gmail.com'>
							<a className={styles.Link}>erickaskim@gmail.com</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
