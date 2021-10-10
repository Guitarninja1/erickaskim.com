import Circle from './Circle';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo(props) {
	const { title, text, percent } = props;
	return (
		<div className={styles.WhatWeDo}>
			<div className={styles.CircleWrap}>
				<Circle percent={percent} />
			</div>
			<div className={styles.TextWrap}>
				<h3 className={styles.Title}>{title}</h3>
				<p className={styles.Text}>{text}</p>
			</div>
		</div>
	);
}
