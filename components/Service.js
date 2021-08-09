import Link from 'next/link';
import Image from 'next/image';

export default function Service(props) {
	const { imageSrc, imageAlt, text, title, link } = props;
	return (
		<div className='index--webdev'>
			<Image src={imageSrc} alt={imageAlt} height='300px' width='200px' />
			<h3 className='index--webdev__flavortxt'>{title}</h3>
			<p>{text}</p>
			<Link href={link}>➡️</Link>
		</div>
	);
}
