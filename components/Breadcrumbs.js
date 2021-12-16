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
					crumb = 'Home';
					return (
						<li key={index} className={styles.home}>
							<Link href='/'>
								<a>{crumb}</a>
							</Link>
						</li>
					);
				}
				if (crumb === 'posts') {
					crumb = 'Blog';
					return (
						<li key={index} className={styles.home}>
							<Link href='/blog'>
								<a>{crumb}</a>
							</Link>
						</li>
					);
				}
				if (crumb === 'projects') {
					crumb = 'Portfolio';
					return (
						<li key={index} className={styles.home}>
							<Link href='/portfolio'>
								<a>{crumb}</a>
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
