import Image from 'next/image';
import Link from 'next/link';
import Message from '../components/Message';
import InTouch from '../components/InTouch';
import Breadcrumbs from '../components/Breadcrumbs';
import Header from '../components/Header';
import styles from './contact.module.css';
import Flavortext from '../components/Flavortext';

export default function Contact() {
	return (
		<div className='contact--wrapper'>
			<Header />
			<h2 className={styles.title}>Contact</h2>
			<Breadcrumbs page='Contact' />
			<div className={styles.items}>
				<div className={styles.phone}>
					<div className={styles.image}>
						<Image src='/phone.svg' alt='phone' height='100px' width='100px' />
					</div>
					<div className={styles.content1}>
						<h3 className={styles.hthree}>Hit us up</h3>
						<Link href='tel:+15308282706'>
							<a className={styles.text}>+1 530 828 2706</a>
						</Link>
						<Link href='mailto:erickaskim@gmail.com'>
							<a className={styles.text}>erickaskim@gmail.com</a>
						</Link>
					</div>
				</div>
				<div className={styles.address}>
					<div className={styles.image}>
						<Image
							src='/address.svg'
							alt='gps marker'
							height='100px'
							width='100px'
						/>
					</div>
					<div className={styles.content2}>
						<h3 className={styles.hthree}>Address:</h3>
						<address className={styles.text}>
							536 W LaStrada cir, Medford, OR, 97504, USA
						</address>
					</div>
				</div>
			</div>
			<Flavortext title='BE IN TOUCH' />
			<Message />
			<InTouch />
		</div>
	);
}
