import Breadcrumbs from './Breadcrumbs';
import styles from './Title_BCrumbs.module.css';
export default function Title_BCrumbs(props) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title} data-after-content={props.page}>
				{props.page}
			</h2>
			<Breadcrumbs page={props.page} />
		</div>
	);
}
