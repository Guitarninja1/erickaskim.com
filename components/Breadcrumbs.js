import Link from 'next/link';
import styles from './Breadcrumbs.module.css';
import { useRouter } from 'next/router';

export default function Breadcrumbs(props) {
	const { page } = props;
	const router = useRouter();
	const { pathname } = router;
	const path = pathname.split('/');
	const crumbs = [...path];
	return (
		<ul className={styles.unordered}>
			{crumbs.map((crumb, index) => {
				if (crumb === '') {
					return (
						<li key={index} className={styles.home}>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
					);
				}
				if (crumb === 'posts') {
					return (
						<li key={index} className={styles.home}>
							<Link href='/blog'>
								<a>Blog</a>
							</Link>
						</li>
					);
				}
				if (crumb === 'projects') {
					return (
						<li key={index} className={styles.home}>
							<Link href='/portfolio'>
								<a>Portfolio</a>
							</Link>
						</li>
					);
				}
				if (index === crumbs.length - 1) {
					return (
						<li key={index} className={styles.home}>
							{page}
						</li>
					);
				}
			})}
		</ul>
	);
}
