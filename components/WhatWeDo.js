import Image from 'next/image';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo(props) {
	const { title, text, image, imageAlt } = props;
	return (
		<div className={styles.WhatWeDo}>
			<Image src={image} alt={imageAlt} height='100%' width='100%' />
			<div className={styles.TextWrap}>
				<h3 className={styles.Title}>{title}</h3>
				<p className={styles.Text}>{text}</p>
			</div>
		</div>
	);
}
