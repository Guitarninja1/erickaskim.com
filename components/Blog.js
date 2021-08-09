import Image from 'next/image';
import Link from 'next/link';

export default function News(props) {
	const { image, imageAlt, name, date, share, title, link } = props;
	return (
		<div className='index--blog'>
			<Image src={image} alt={imageAlt} height='300px' width='200px' />
			<h2>{name}</h2>
			<p>{date}</p>
			<Link href={share}>Share</Link>
			<h3>{title}</h3>
			<Link href={link}>➡️</Link>
		</div>
	);
}
