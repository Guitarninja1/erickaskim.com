import Triangle from './svg/Triangle';
import styles from './Flavortext.module.css';

export default function Flavortext(props) {
	const { title } = props;
	return (
		<div className={styles.wrapper}>
			<Triangle />
			<h3 className={styles.flavortext}>{title}</h3>
		</div>
	);
}
