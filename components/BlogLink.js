import Link from 'next/link';
import Image from 'next/dist/client/image';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import ArrowRight from '../public/arrowright.svg';
import styles from './BlogLink.module.css';

export default function BlogLink(props) {
	const { image, imageAlt, name, date, share, title, link } = props;
	return (
		<div className={styles.BlogLinkWrapper}>
			<div className={styles.BlogImageWrap}>
				<Image src={image} alt={imageAlt} layout='fill' />
			</div>
			<div className={styles.BlogPostWrap}>
				<div className={styles.AuthorWrap}>
					<h2 className={styles.BlogInfo}>{name}</h2>
					<p className={styles.BlogInfo}>{date}</p>
				</div>
				<FacebookShareButton url='#'>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
				<TwitterShareButton url='#'>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
			</div>
			<h3 className={styles.Title}>{title}</h3>
			<Link href={link}>
				<a className={styles.ArrowWrap}>
					<ArrowRight className={styles.ArrowRight} />
				</a>
			</Link>
		</div>
	);
}
