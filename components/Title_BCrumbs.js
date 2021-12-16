import Breadcrumbs from './Breadcrumbs';
import styles from './Title_BCrumbs.module.css';
export default function Title_BCrumbs(props) {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title} data-after-content={props.page}>
					{props.page}
				</h2>
			</div>
			<Breadcrumbs page={props.page} />
		</div>
	);
}
