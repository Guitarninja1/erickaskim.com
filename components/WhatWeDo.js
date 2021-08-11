import Image from 'next/image';

export default function WhatWeDo(props) {
	const { title, text, image, imageAlt } = props;
	return (
		<div className='whatwedo--items'>
			<Image src={image} alt={imageAlt} height='100%' width='100%' />
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
}
