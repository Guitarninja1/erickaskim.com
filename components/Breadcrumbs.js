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
				let xcrumb = crumb;
				if (xcrumb === '') {
					xcrumb = 'Home';
					return (
						<li key={index} className={styles.home}>
							<Link href='/'>
								<a>{xcrumb}</a>
							</Link>
						</li>
					);
				}
				if (xcrumb === 'posts') {
					xcrumb = 'Blog';
					return (
						<li key={index} className={styles.home}>
							<Link href='/blog'>
								<a>{xcrumb}</a>
							</Link>
						</li>
					);
				}
				if (xcrumb === 'projects') {
					xcrumb = 'Portfolio';
					return (
						<li key={index} className={styles.home}>
							<Link href='/portfolio'>
								<a>{xcrumb}</a>
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
