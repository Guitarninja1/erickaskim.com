import Link from 'next/link';
import ArrowRight from '../public/arrowright.svg';
import styles from './Service.module.css';

export default function Service(props) {
	const { imageSrc, imageAlt, text, title, link } = props;
	return (
		<div className={styles.ServiceWrapper}>
			<div className={styles.Service}>
				<img src={imageSrc} alt={imageAlt} height='100%' width='100%' />
				<h3 className={styles.ServiceText}>{title}</h3>
				<p>{text}</p>
				<Link href={link}>
					<a>
						<ArrowRight className={styles.ArrowRight} />
					</a>
				</Link>
			</div>
		</div>
	);
}
