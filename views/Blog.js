import styles from './Blog.module.css';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import Image from 'next/image';

export default function blog(props) {
	const allPosts = props.allPosts;

	return (
		<div className={styles.TopWrapper}>
			<div className={styles.BottomWrapper}>
				<Header />
				<div className={styles.PageTitleWrapper}>
					<h2 className={styles.PageTitle}>The Blogening</h2>
				</div>
				<Breadcrumbs page='Blog' />
				<ul className={styles.BlogList}>
					{allPosts.map((post) => (
						<li className={styles.BlogListLi} key={post.slug}>
							<div className={styles.ImageWrap}>
								<a className={styles.ImageWrap} href={`/posts/${post.slug}`}>
									<Image src={post.image} alt={post.title} layout='fill' />
								</a>
							</div>
							<div className={styles.BlogListText}>
								<div className={styles.BlogData}>
									<p>{post.date}</p>
									<div className={styles.Share}>
										<div className={styles.FB}>
											<FacebookShareButton url={post.slug}>
												<FacebookIcon size={22} round={true} />
											</FacebookShareButton>
										</div>
										<TwitterShareButton url={post.slug}>
											<TwitterIcon size={22} round={true} />
										</TwitterShareButton>
									</div>
								</div>
								<a className={styles.Link} href={`/posts/${post.slug}`}>
									<h3 className={styles.PostTitle}>{post.title}</h3>
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
