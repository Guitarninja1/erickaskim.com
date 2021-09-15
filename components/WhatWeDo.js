import PercentCircle from './PercentCircle';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo(props) {
	const { title, text, percent, circle } = props;
	return (
		<div className={styles.WhatWeDo}>
			<PercentCircle
				percent={percent}
				circle={circle}
				className={styles.PercentCircle}
			/>
			<div className={styles.TextWrap}>
				<h3 className={styles.Title}>{title}</h3>
				<p className={styles.Text}>{text}</p>
			</div>
		</div>
	);
}
