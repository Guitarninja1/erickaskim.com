import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import InTouch from '../../components/InTouch';
import Image from 'next/dist/client/image';
import styles from './Case.module.css';
import ArrowLeft from '../../public/arrowleft.svg';
import ArrowRight from '../../public/arrowright.svg';
import Link from 'next/link';
import Flavortext from '../../components/Flavortext';

export default function Case() {
	return (
		<div className={styles.topwrap}>
			<Header />
			<div className={styles.pagetitlewrapper}>
				<h2 className={styles.pagetitle}>CASE</h2>
				<Breadcrumbs page='Case' />
			</div>
			<div className={styles.imagewrap}>
				<Image src='https://picsum.photos/200' layout='fill' alt='image' />
			</div>
			<div className={styles.arrowwrap}>
				<Link href='/'>
					<a className={styles.arrowleftwrap}>
						<ArrowLeft className={styles.arrowleft} />
					</a>
				</Link>
				<Link href='/'>
					<a className={styles.rightwrap}>
						<ArrowRight className={styles.arrowright} />
					</a>
				</Link>
			</div>
			<div className={styles.aboutwrap}>
				<h2 className={styles.title}>About Project</h2>
				<p className={styles.text}>
					The agency builds personal brands for entrepreneurs and corporates. We
					built a page with all kind of information about the service, examples
					of results, case studies, testimonials of old clients and pricing
					packages. We like to build new websites especially for any kind of
					marketing agencies. At this time we created a landing page for social
					media marketing agency.
				</p>
				<button
					type='submit'
					id='submit'
					value='Submit'
					className={styles.submit}
				>
					<p className={styles.btn}>Visit The Site</p>
				</button>
			</div>
			<div className={styles.clientinfowrap}>
				<div className={styles.border1} />
				<div className={styles.infowrap}>
					<h6 className={styles.infotitle}>Client:</h6>
					<p className={styles.infotext}>OSH Marketing Company</p>
				</div>
				<div className={styles.infowrap}>
					<h6 className={styles.infotitle}>Category:</h6>
					<p className={styles.infotext}>Web Development</p>
				</div>
				<div className={styles.infowrap}>
					<h6 className={styles.infotitle}>Start Date:</h6>
					<p className={styles.infotext}>20 Oct 2021</p>
				</div>
				<div className={styles.infowrap}>
					<h6 className={styles.infotitle}>Finish Date:</h6>
					<p className={styles.infotext}>20 Nov 2021</p>
				</div>
				<div className={styles.infowrap}>
					<h6 className={styles.infotitleshare}>Share:</h6>
				</div>
				<div className={styles.social}>
					<Link href='/'>
						<a className={styles.sociallink}>Fb</a>
					</Link>
					<Link href='/'>
						<a className={styles.sociallink}>Tw</a>
					</Link>
					<Link href='/'>
						<a className={styles.sociallinkin}>In</a>
					</Link>
				</div>
				<div className={styles.border2} />
			</div>
			<div className={styles.relatedwrap}>
				<Flavortext title='portfolio' className={styles.portflav} />
				<h2 className={styles.relatedtitle}>Related Cases</h2>
				<div className={styles.mainimagewrap}>
					<div className={styles.imagewrap2}>
						<Image src='https://picsum.photos/200' layout='fill' alt='image' />
					</div>
					<div className={styles.imagewrap2}>
						<Image src='https://picsum.photos/200' layout='fill' alt='image' />
					</div>
					<div className={styles.imagewrap2}>
						<Image src='https://picsum.photos/200' layout='fill' alt='image' />
					</div>
				</div>
				<h2 className={styles.related}>RELATED</h2>
			</div>
			<InTouch />
		</div>
	);
}
