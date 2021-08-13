import Image from 'next/image';
import Link from 'next/link';
import Message from '../components/Message';
import InTouch from '../components/InTouch';

export default function Contact() {
	return (
		<div className='contact--wrapper'>
			<h2 className='contact--title'>Contact</h2>
			<div className='contact--ul'>
				<li>
					<Link href='#'>Home</Link>
				</li>
				<li>
					<Link href='#'>Contact</Link>
				</li>
			</div>
			<div className='contact--items'>
				<div className='contact--phone'>
					<Image src='/phone.svg' alt='phone' height='100px' width='100px' />
					<p>Hit us up</p>
					<Link href='tel:+15308282706'>+1 530 828 2706</Link>
					<Link href='mailto:erickaskim@gmail.com'>erickaskim@gmail.com</Link>
				</div>
				<div className='contact--address'>
					<Image
						src='/address.svg'
						alt='gps marker'
						height='100px'
						width='100px'
					/>
					<p>Address:</p>
					<address>536 W LaStrada cir, Medford, OR, 97504, USA</address>
				</div>
			</div>
			<Message />
			<InTouch />
		</div>
	);
}
