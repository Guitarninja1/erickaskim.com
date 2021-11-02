import Image from 'next/image';
import Link from 'next/link';
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import Comment from '../components/Comment';
import ArrowLeft from '../public/arrowleft.svg';
import ArrowRight from '../public/arrowright.svg';
import Flavortext from '../components/Flavortext';
import styles from './Post.module.css';

export default function Post() {
	return (
		<main>
			<div className={styles.BlogTopWrap}>
				<div className={styles.BottomWrap}>
					<Header />
					<div className={styles.PageTitleWrapper}>
						<h2 className={styles.PageTitle}>POST</h2>
						<Breadcrumbs page='Post' />
					</div>
					<div className={styles.Post}>
						<div className={styles.TitleImageWrap}>
							<Image
								src='https://picsum.photos/200'
								layout='fill'
								alt='image'
							/>
						</div>
						<div className={styles.DataWrap}>
							<div className={styles.TextWrap}>
								<h4 className={styles.Text}>Erick Askim</h4>
								<h4 className={styles.Text}>Aug 12,2021</h4>
							</div>
							<FacebookShareButton url='#'>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
							<TwitterShareButton url='#'>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</div>
						<h3 className={styles.Title}>Lorem ipsum</h3>
						<p className={styles.BlogBody}>
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
						<blockquote className={styles.QuoteWrap}>
							<p className={styles.Quote}>
								As a participatory media culture, social media platforms or
								social networking sites are forms of mass communication that,
								through media technologies, allow large amounts of product and
								distribution of content to reach the largest audience possible.{' '}
							</p>
							<h5 className={styles.QuoteAuth}>Ham Bone</h5>
						</blockquote>
						<h3 className={styles.Title}>Lorem ipsum</h3>
						<p className={styles.BlogBody}>
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
						<ol className={styles.BlogOl}>
							<li className={styles.BlogLi}>
								As a participatory media culture, social media platforms or
								social networking sites are forms of mass communication that,
								through media technologies.
							</li>
							<li className={styles.BlogLi}>
								Allow large amounts of product and distribution of content to
								reach the largest audience possible.{' '}
							</li>
							<li className={styles.BlogLi}>
								However, there are downsides to virtual promotions as servers,
								systems, and websites may crash, fail, or become overloaded with
								information. You also can stand risk of losing uploaded
								information and storage and at a use can also be effected by a
								number of outside variables.
							</li>
						</ol>
						<ul className={styles.BlogUl}>
							<h6 className={styles.BlogUlTitle}>Tags:</h6>
							<li className={`${styles.BlogTagsLi} ${styles.BlogLiAfter}`}>
								idea
							</li>
							<li className={`${styles.BlogTagsLi} ${styles.BlogLiAfter}`}>
								marketing
							</li>
							<li className={styles.BlogTagsLi}>brand</li>
						</ul>
						<div className={styles.AuthWrap}>
							<div className={styles.AuthHeader}>
								<div className={styles.AuthImageWrap}>
									<Image src='/me.jpeg' alt='blogauthor' layout='fill' />
								</div>
								<h5 className={styles.AboutAuth}>Erick Askim</h5>
							</div>
							<p className={styles.AuthBody}>
								Web developer since 2006. Create hundreds of websites, HTML and
								CSS3 expert, who started to learn web design on a world-class
								level.
							</p>
							<div className={styles.Social}>
								<Link href='/'>
									<a className={styles.SocialLink}>Fb</a>
								</Link>
								<Link href='/'>
									<a className={styles.SocialLink}>Tw</a>
								</Link>
								<Link href='/'>
									<a className={styles.SocialLink}>In</a>
								</Link>
							</div>
						</div>
						<Comment />
						<div className={styles.NextPrevPost}>
							<div className={styles.BorderTop} />
							<div className={styles.PrevWrap}>
								<Link href='/'>
									<a className={styles.PrevBlog}>
										<ArrowLeft className={styles.BlogArrowLeft} />
										PREV POST
									</a>
								</Link>
							</div>
							<div className={styles.NextWrap}>
								<Link href='/'>
									<a className={styles.NextBlog}>
										NEXT POST
										<ArrowRight className={styles.BlogArrowRight} />
									</a>
								</Link>
							</div>
							<div className={styles.BorderBottom} />
						</div>
						<div className={styles.RelatedWrap}>
							<Flavortext title='MORE INFO' />
							<h2 className={styles.RelatedTitle}>Related Posts</h2>
							<div className={styles.RelatedPost}>
								<div className={styles.RelatedImageWrap}>
									<Image
										src='https://picsum.photos/200'
										layout='fill'
										alt='image'
									/>
								</div>
								<div className={styles.DataWrap}>
									<div className={styles.TextWrap}>
										<h4 className={styles.Text}>Erick Askim</h4>
										<h4 className={styles.Text}>Aug 12,2021</h4>
									</div>
									<FacebookShareButton url='#'>
										<FacebookIcon size={32} round={true} />
									</FacebookShareButton>
									<TwitterShareButton url='#'>
										<TwitterIcon size={32} round={true} />
									</TwitterShareButton>
								</div>
								<h3 className={styles.Title}>Lorem ipsum</h3>
								<div className={styles.RelatedBlogWrap}>
									<Link href='/'>
										<a className={styles.RelatedBlog}>
											<ArrowRight className={styles.BlogArrow} />
										</a>
									</Link>
								</div>
							</div>
							<div className={styles.RelatedPost}>
								<div className={styles.RelatedImageWrap}>
									<Image
										src='https://picsum.photos/200'
										layout='fill'
										alt='image'
									/>
								</div>
								<div className={styles.DataWrap}>
									<div className={styles.TextWrap}>
										<h4 className={styles.Text}>Erick Askim</h4>
										<h4 className={styles.Text}>Aug 12,2021</h4>
									</div>
									<FacebookShareButton url='#'>
										<FacebookIcon size={32} round={true} />
									</FacebookShareButton>
									<TwitterShareButton url='#'>
										<TwitterIcon size={32} round={true} />
									</TwitterShareButton>
								</div>
								<h3 className={styles.Title}>Lorem ipsum</h3>
								<div className={styles.RelatedBlogWrap}>
									<Link href='/'>
										<a className={styles.RelatedBlog}>
											<ArrowRight className={styles.BlogArrow} />
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
