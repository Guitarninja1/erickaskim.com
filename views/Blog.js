import Header from '../components/Header';
import styles from './Blog.module.css';

export default function blog() {
	return (
		<div className={styles.TopWrapper}>
			<div className={styles.BottomWrapper}>
				<Header />
				<p>Blogs Go Here!!!</p>
			</div>
		</div>
	);
}
