import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
	return (
		<div className='contact--wrapper'>
			<h2 className='contact--title'>Contact</h2>
			<div className='contact--ul'>
				<li>
					<Link href='/' />
				</li>
				<li>
					<Link href='#' />
				</li>
			</div>
			<div className='contact--items'>
				<div className='contact--phone'>
					<Image src='../public/phone.svg' alt='phone' />
					<p>Hit us up</p>
					<p>+1 530 828 2706</p>
					<p>erickaskim@gmail.com</p>
				</div>
				<div className='contact--address'>
					<Image src='../public/address.svg' alt='gps marker' />
					<p>Address:</p>
					<address>536 W LaStrada cir, Medford, OR, 97504, USA</address>
				</div>
			</div>
		</div>
	);
}
