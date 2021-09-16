import Circle from './Circle';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo(props) {
	const { title, text, percent, PercentGap } = props;
	return (
		<div className={styles.WhatWeDo}>
			<div className={styles.CircleWrap}>
				<Circle percent={percent} PercentGap={PercentGap} />
			</div>
			<div className={styles.TextWrap}>
				<h3 className={styles.Title}>{title}</h3>
				<p className={styles.Text}>{text}</p>
			</div>
		</div>
	);
}
