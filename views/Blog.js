import Header from '../components/Header';
import Head from 'next/head';
import styles from './Blog.module.css';
import { attributes, react as HomeContent } from '../content/posts.md';

export default function blog() {
	let { title, posts } = attributes;
	return (
		<div className={styles.TopWrapper}>
			<Header />
			<div className={styles.BottomWrapper}>
				<Head>
					<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
				</Head>
				<article>
					<h1>{title}</h1>
					<HomeContent />
					<ul>
						{posts.map((post, k) => (
							<li key={k}>
								<h2>{post.name}</h2>
								<p>{post.description}</p>
							</li>
						))}
					</ul>
				</article>
			</div>
		</div>
	);
}
