import styles from './Blog.module.css';
import Header from '../components/Header';
import Breadcrumbs from '../components/Breadcrumbs';

export default function blog(props) {
	const allPosts = props.allPosts;
	return (
		<div className={styles.TopWrapper}>
			<div className={styles.BottomWrapper}>
				<Header />
				<Breadcrumbs page='Blog' />
				<h2>The Blogening</h2>
				<ul className={styles.BlogList}>
					{allPosts.map((post) => (
						<li className={styles.BloglistUl} key={post.slug}>
							<a href={`/posts/${post.slug}`}>{post.title}</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
