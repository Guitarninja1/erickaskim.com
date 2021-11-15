import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import styles from './FourOhFour.module.css';

export default function FourZeroFour() {
	return (
		<div className={styles.Wrapper}>
			<Header />
			<div className={styles.TitleWrapper}>
				<h1 className={styles.Title}>OOPS!</h1>
			</div>
			<Breadcrumbs page='404' />
			<div className={styles.FourOhFourError}>
				<h2 className={styles.h2}>404</h2>
				<h3 className={styles.h3}>Page not found</h3>
			</div>
			<div className={styles.SearchWrapper}>
				<p className={styles.Text}>
					It looks like nothing was found at this location. Maybe try a kneeling
					before Zod?
				</p>
			</div>
		</div>
	);
}
