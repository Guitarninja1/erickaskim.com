import Header from './Header';
import Flavortext from './Flavortext';
import styles from './Resume.module.css';

export default function Resume() {
	return (
		<div className={styles.ResumeWrapper}>
			<Header />
			<div className={styles.ResumeSlider}>
				<Flavortext title='Digital Dominance' />
				<h2>Resume</h2>
				<p className={styles.ResumeBody}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
					erat luctus, condimentum lectus eu, egestas tortor.
				</p>
			</div>
		</div>
	);
}
