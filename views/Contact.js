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
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.titlewrapper}>
					<h2 className={styles.title}>Contact</h2>
					<div className={styles.breadcrumb}>
						<Breadcrumbs page='Contact' />
					</div>
				</div>
				<div className={styles.items}>
					<div className={styles.image}>
						<div>
							<Image
								src='/phone.svg'
								alt='phone'
								height='100px'
								width='100px'
							/>
						</div>
						<div className={styles.contenthit}>
							<h3 className={styles.hthree}>Hit us up</h3>
							<Link href='tel:+15308282706'>
								<a className={styles.text}>+1 530 828 2706</a>
							</Link>
							<Link href='mailto:erickaskim@gmail.com'>
								<a className={styles.text}>erickaskim@gmail.com</a>
							</Link>
						</div>
					</div>
					<div className={styles.image}>
						<div>
							<Image
								src='/address.svg'
								alt='gps marker'
								height='100px'
								width='100px'
							/>
						</div>
						<div className={styles.contentadd}>
							<h3 className={styles.hthree}>Address:</h3>
							<address className={styles.text}>
								536 W LaStrada cir, Medford, OR, 97504, USA
							</address>
						</div>
					</div>
				</div>
			</div>

			<Flavortext title='BE IN TOUCH' />
			<Message />
			<InTouch />
		</div>
	);
}
