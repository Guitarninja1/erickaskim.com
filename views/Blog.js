import Head from 'next/head';
import Header from '../components/Header';
import { attributes, react as HomeContent } from '../content/posts.md';
import styles from './Blog.module.css';

export default function blog() {
	let { title, body, date } = attributes;
	return (
		<div className={styles.TopWrapper}>
			<Head>
				<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
			</Head>
			<div className={styles.BottomWrapper}>
				<Header />
				<article>
					<h1>{title}</h1>
					{/* <HomeContent /> */}
					<p>{body}</p>
					<p>{date}</p>
				</article>
			</div>
		</div>
	);
}
