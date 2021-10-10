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
		<div className={styles.TopWrapper}>
			<Header />
			<div className={styles.BottomWrapper}>
				<div className={styles.items}>
					<div className={styles.PageTitleWrapper}>
						<h2 className={styles.PageTitle}>BLOG</h2>
						<div className={styles.Breadcrumbs}>
							<Breadcrumbs page='Blog' />
						</div>
					</div>
					<div className={styles.PreviewWrap}>
						<div className={styles.ImageWrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.PostAuthorDataWrap}>
							<div className={styles.TextWrap}>
								<p className={styles.Text}>Erick Askim</p>
								<p className={styles.Text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.Title}>Lorem ipsum</h3>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.ArrowRight} />
							</a>
						</Link>
					</div>
					<div className={styles.PreviewWrap}>
						<div className={styles.ImageWrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.PostAuthorDataWrap}>
							<div className={styles.TextWrap}>
								<p className={styles.Text}>Erick Askim</p>
								<p className={styles.Text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.Title}>Lorem ipsum</h3>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.ArrowRight} />
							</a>
						</Link>
					</div>
					<div className={styles.PreviewWrap}>
						<div className={styles.ImageWrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.PostAuthorDataWrap}>
							<div className={styles.TextWrap}>
								<p className={styles.Text}>Erick Askim</p>
								<p className={styles.Text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.Title}>Lorem ipsum</h3>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.ArrowRight} />
							</a>
						</Link>
					</div>
					<div className={styles.PreviewWrap}>
						<div className={styles.ImageWrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.PostAuthorDataWrap}>
							<div className={styles.TextWrap}>
								<p className={styles.Text}>Erick Askim</p>
								<p className={styles.Text}>Aug 12,2021</p>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.Title}>Lorem ipsum</h3>
						<Link href='/post'>
							<a aria-label='Next'>
								<ArrowRight className={styles.ArrowRight} />
							</a>
						</Link>
					</div>
				</div>
				<div className={styles.PaginationWrap}>
					<ul className={styles.PaginationUl}>
						<li className={styles.PaginationLi}>
							<Link href='/post'>
								<a className={styles.Link}>1</a>
							</Link>
						</li>
						<li className={styles.PaginationLi}>
							<Link href='/post'>
								<a className={styles.Link}>2</a>
							</Link>
						</li>
						<li className={styles.PaginationLi}>
							<Link href='/post'>
								<a className={styles.Link}>3</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
