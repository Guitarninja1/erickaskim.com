import Image from 'next/image';
import Link from 'next/link';
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';
import Header from '../components/Header';
import styles from './Blog.module.css';
import ArrowRight from '../public/arrowright.svg';
import Breadcrumbs from '../components/Breadcrumbs';

export default function blog() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.bottomwrapper}>
				<div className={styles.items}>
					<div className={styles.pagetitlewrapper}>
						<h2 className={styles.pagetitle}>BLOG</h2>
						<div className={styles.breadcrumbs}>
							<Breadcrumbs page='Blog' />
						</div>
					</div>
					<div className={styles.previewwrap}>
						<div className={styles.imagewrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.datawrap}>
							<div className={styles.textwrap}>
								<p className={styles.text}>Erick Askim</p>
								<p className={styles.text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.title}>Lorem ipsum</h3>
						<div className={styles.arrowwrap}></div>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.arrow} />
							</a>
						</Link>
					</div>
					<div className={styles.previewwrap}>
						<div className={styles.imagewrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.datawrap}>
							<div className={styles.textwrap}>
								<p className={styles.text}>Erick Askim</p>
								<p className={styles.text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.title}>Lorem ipsum</h3>
						<div className={styles.arrowwrap}></div>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.arrow} />
							</a>
						</Link>
					</div>
					<div className={styles.previewwrap}>
						<div className={styles.imagewrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.datawrap}>
							<div className={styles.textwrap}>
								<p className={styles.text}>Erick Askim</p>
								<p className={styles.text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.title}>Lorem ipsum</h3>
						<div className={styles.arrowwrap}></div>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.arrow} />
							</a>
						</Link>
					</div>
					<div className={styles.previewwrap}>
						<div className={styles.imagewrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.datawrap}>
							<div className={styles.textwrap}>
								<p className={styles.text}>Erick Askim</p>
								<p className={styles.text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.title}>Lorem ipsum</h3>
						<div className={styles.arrowwrap}></div>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.arrow} />
							</a>
						</Link>
					</div>
				</div>
				<div className={styles.paginationwrap}>
					<ul className={styles.paginationul}>
						<li className={styles.paginationli}>
							<Link href='/post'>
								<a className={styles.link}>1</a>
							</Link>
						</li>
						<li className={styles.paginationli}>
							<Link href='/post'>
								<a className={styles.link}>2</a>
							</Link>
						</li>
						<li className={styles.paginationli}>
							<Link href='/post'>
								<a className={styles.link}>3</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
