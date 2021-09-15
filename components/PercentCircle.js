import Circle from '../public/circle.svg';
import styles from './PercentCircle.module.css';

export default function PercentCircle(props) {
	const { percent, circle } = props;
	return (
		<div className={styles.CircleWrap}>
			<Circle
				className={styles.Circle}
				style={{ strokeDashoffset: [circle] }}
			/>
			<div className={styles.PercentWrap}>{percent}</div>
		</div>
	);
}
