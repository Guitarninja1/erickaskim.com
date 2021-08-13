import Image from 'next/image';
import Link from 'next/link';
import InTouch from '../components/Previews/InTouch';
import Triangle from '../components/svg/Triangle';

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
			<div className='contact--flavortext'>
				<Triangle />
				<h3 className='flavortext'>be in touch</h3>
			</div>
			<div className='contact--form-wrapper'>
				<h2>Send Us A Message</h2>
				<p></p>
				<form>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' />
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' />
					<label htmlFor='tel'>Phone</label>
					<input type='tel' id='tel' />
					<textarea defaultValue='Comment' />
					<input type='submit' value='Submit' className='contact--submit' />
				</form>
			</div>
			<InTouch />
		</div>
	);
}
