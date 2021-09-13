import Image from 'next/image';
import Link from 'next/link';
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';
import Breadcrumbs from '../../components/Breadcrumbs';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import styles from './Post.module.css';
import ArrowLeft from '../../public/arrowleft.svg';
import ArrowRight from '../../public/arrowright.svg';
import Flavortext from '../../components/Flavortext';

export default function Post() {
	return (
		<main>
			<div className={styles.blogtopwrap}>
				<div className={styles.bottomwrap}>
					<Header />
					<div className={styles.pagetitlewrapper}>
						<h2 className={styles.pagetitle}>POST</h2>
						<Breadcrumbs page='Post' />
					</div>
					<div className={styles.post}>
						<div className={styles.imagewrap1}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.datawrap}>
							<div className={styles.textwrap}>
								<h4 className={styles.text}>Erick Askim</h4>
								<h4 className={styles.text}>Aug 12,2021</h4>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.title}>Lorem ipsum</h3>
						<p className={styles.blogbody}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
						<div className={styles.quotewrap}>
							<p className={styles.quote}>
								As a participatory media culture, social media platforms or
								social networking sites are forms of mass communication that,
								through media technologies, allow large amounts of product and
								distribution of content to reach the largest audience possible.{' '}
							</p>
							<h5 className={styles.quoteauth}>Ham Bone</h5>
						</div>
						<h3 className={styles.title}>Lorem ipsum</h3>
						<p className={styles.blogbody}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</p>
						<ol className={styles.blogol}>
							<li className={styles.blogli}>
								As a participatory media culture, social media platforms or
								social networking sites are forms of mass communication that,
								through media technologies.
							</li>
							<li className={styles.blogli}>
								Allow large amounts of product and distribution of content to
								reach the largest audience possible.{' '}
							</li>
							<li className={styles.blogli}>
								However, there are downsides to virtual promotions as servers,
								systems, and websites may crash, fail, or become overloaded with
								information. You also can stand risk of losing uploaded
								information and storage and at a use can also be effected by a
								number of outside variables.
							</li>
						</ol>
						<ul className={styles.blogul}>
							<h6 className={styles.blogultitle}>Tags:</h6>
							<li className={`${styles.blogtagsli} ${styles.blogliafter}`}>
								idea
							</li>
							<li className={`${styles.blogtagsli} ${styles.blogliafter}`}>
								marketing
							</li>
							<li className={styles.blogtagsli}>brand</li>
						</ul>
						<div className={styles.authwrap}>
							<div className={styles.authheader}>
								<div className={styles.authimagewrap}>
									<Image src='/me.jpeg' alt='blogauthor' layout='fill' />
								</div>
								<h5 className={styles.aboutauth}>Erick Askim</h5>
							</div>
							<p className={styles.authbody}>
								Web developer since 2006. Create hundreds of websites, HTML and
								CSS3 expert, who started to learn web design on a world-class
								level.
							</p>
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
						</div>
						<Comment />
						<div className={styles.nextprevpost}>
							<div className={styles.bordertop} />
							<div className={styles.prevwrap}>
								<Link href='/'>
									<a className={styles.prevblog}>
										<ArrowLeft className={styles.blogarrowleft} />
										PREV POST
									</a>
								</Link>
							</div>
							<div className={styles.nextwrap}>
								<Link href='/'>
									<a className={styles.nextblog}>
										NEXT POST
										<ArrowRight className={styles.blogarrowright} />
									</a>
								</Link>
							</div>
							<div className={styles.borderbottom} />
						</div>
						<div className={styles.relatedwrap}>
							<Flavortext title='MORE INFO' />
							<h2 className={styles.relatedtitle}>Related Posts</h2>
							<div className={styles.relatedpost}>
								<div className={styles.imagewrap}>
									<Image
										src='https://picsum.photos/200'
										layout='fill'
										alt='image'
									/>
								</div>
								<div className={styles.datawrap}>
									<div className={styles.textwrap}>
										<h4 className={styles.text}>Erick Askim</h4>
										<h4 className={styles.text}>Aug 12,2021</h4>
									</div>
									<FacebookShareButton url='#'>
										<FacebookIcon size={32} round={true} />
									</FacebookShareButton>
									<TwitterShareButton url='#'>
										<TwitterIcon size={32} round={true} />
									</TwitterShareButton>
								</div>
								<h3 className={styles.title}>Lorem ipsum</h3>
								<div className={styles.relatedblogwrap}>
									<Link href='/'>
										<a className={styles.relatedblog}>
											<ArrowRight className={styles.blogarrow} />
										</a>
									</Link>
								</div>
							</div>
							<div className={styles.relatedpost}>
								<div className={styles.imagewrap}>
									<Image
										src='https://picsum.photos/200'
										layout='fill'
										alt='image'
									/>
								</div>
								<div className={styles.datawrap}>
									<div className={styles.textwrap}>
										<h4 className={styles.text}>Erick Askim</h4>
										<h4 className={styles.text}>Aug 12,2021</h4>
									</div>
									<FacebookShareButton url='#'>
										<FacebookIcon size={32} round={true} />
									</FacebookShareButton>
									<TwitterShareButton url='#'>
										<TwitterIcon size={32} round={true} />
									</TwitterShareButton>
								</div>
								<h3 className={styles.title}>Lorem ipsum</h3>
								<div className={styles.relatedblogwrap}>
									<Link href='/'>
										<a className={styles.relatedblog}>
											<ArrowRight className={styles.blogarrow} />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
