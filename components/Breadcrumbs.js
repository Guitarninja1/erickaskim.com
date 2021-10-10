import Link from 'next/link';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs(props) {
	const { page } = props;
	return (
		<ul className={styles.unordered}>
			<li>
				<Link href='/'>
					<a className={styles.home}>Home</a>
				</Link>
			</li>
			<li className={styles.list}>{page}</li>
		</ul>
	);
}
