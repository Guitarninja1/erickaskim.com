import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import styles from './FourOhFour.module.css';

export default function FourZeroFour() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.titlewrapper}>
				<h1 className={styles.title}>OOPS!</h1>
			</div>
			<Breadcrumbs page='404' />
			<div className={styles.error}>
				<h2 className={styles.htwo}>404</h2>
				<h3 className={styles.hthree}>Page not found</h3>
			</div>
			<div className={styles.searchwrapper}>
				<p className={styles.text}>
					It looks like nothing was found at this location. Maybe try a search?
				</p>
				<label htmlFor='search' className='sr-only'>
					Search
				</label>
				<input
					type='search'
					id='search'
					className={styles.search}
					placeholder='Search'
				/>
			</div>
		</div>
	);
}
