import Image from 'next/image';
import Link from 'next/link';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	FacebookMessengerIcon,
} from 'react-share';

export default function News(props) {
	const { image, imageAlt, name, date, share, title, link } = props;
	return (
		<div className='blog--wrapper'>
			<Image src={image} alt={imageAlt} height='100%' width='100%' />
			<h2>{name}</h2>
			<p>{date}</p>
			<FacebookShareButton url={props.children}>
				<FacebookIcon size={32} round={true} />
				{''}
			</FacebookShareButton>
			<TwitterShareButton url={props.children}>
				<TwitterIcon size={32} round={true} />
			</TwitterShareButton>
			<h3>{title}</h3>
			<Link href={link}>➡️</Link>
		</div>
	);
}
