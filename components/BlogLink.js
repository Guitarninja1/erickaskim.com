import Image from 'next/image';
import Link from 'next/link';
import { Component } from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';

export default function BlogLink(props) {
	const { image, imageAlt, name, date, share, title, link } = props;
	return (
		<div className='bloglink--wrapper'>
			<Image src={image} alt={imageAlt} height='100%' width='100%' />
			<h2>{name}</h2>
			<p>{date}</p>
			<FacebookShareButton url='#'>
				<FacebookIcon size={32} round={true} />
			</FacebookShareButton>
			<TwitterShareButton url='#'>
				<TwitterIcon size={32} round={true} />
			</TwitterShareButton>
			<h3>{title}</h3>
			<Link href={link}>➡️</Link>
		</div>
	);
}
