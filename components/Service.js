import Link from 'next/link';
import Image from 'next/image';

export default function Service(props) {
	const { imageSrc, imageAlt, text, title, link } = props;
	return (
		<div className='service--webdev'>
			<Image src={imageSrc} alt={imageAlt} height='100%' width='100%' />
			<h3 className='service--webdev__flavortxt'>{title}</h3>
			<p>{text}</p>
			<Link href={link}>➡️</Link>
		</div>
	);
}
