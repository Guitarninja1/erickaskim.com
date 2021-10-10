import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';
import Flavortext from '../components/Flavortext';
import Header from '../components/Header';
import styles from './About.module.css';
import ArrowLeft from '../public/arrowleft.svg';
import ArrowRight from '../public/arrowright.svg';
import TriangleBorder from '../public/404triangle.svg';
import Glasses from '../public/glasses.svg';
import Atom from '../public/atomman.svg';
import Lightbulb from '../public/lightbulb.svg';
import Puzzle from '../public/puzzle.svg';

export default function About() {
	return (
		<main className={styles.wrapper}>
			<Header />
			<div className={styles.titlewrapper}>
				<h2 className={styles.title}>ABOUT</h2>
				<div className={styles.breadcrumb}>
					<Breadcrumbs page='About' />
				</div>
			</div>
			<div className={styles.aboutwrap}>
				<div className={styles.flavorTextWrap}>
					<Flavortext title='WHO I AM' />
				</div>
				<h2 className={styles.subflavor1}>Digital Professional</h2>
				<p className={styles.largep}>
					Our web design company specializes in the professional creation of
					unique sites and mobile applicatoins.
				</p>
				<p className={styles.smallp}>
					The approach to each new project is individual, we treat equally every
					customer, regardless of the size of the company and its budget. Our
					web design company specializes in the professional creation of unique
					sites.{' '}
				</p>
				<div className={styles.statswrapper}>
					<div className={styles.statnumwrap}>
						<p className={styles.statnum}>
							365<span className={styles.statnumplus}>+</span>
						</p>
						<p className={styles.statnumtitle}>
							Satisfied <span className={styles.statnumtitle}>clients</span>
						</p>
					</div>
					<div className={styles.statnumwrap}>
						<p className={styles.statnum}>
							638<span className={styles.statnumplus}>+</span>
						</p>
						<p className={styles.statnumtitle}>
							successful <span className={styles.statnumtitle}>projects</span>
						</p>
					</div>
					<div className={styles.statnumwrap}>
						<p className={styles.statnum}>
							65<span className={styles.statnumplus}>+</span>
						</p>
						<p className={styles.statnumtitle}>
							team <span className={styles.statnumtitle}>members</span>
						</p>
					</div>
					<div className={styles.statnumwrap}>
						<p className={styles.statnum}>
							15<span className={styles.statnumplus}>+</span>
						</p>
						<p className={styles.statnumtitle}>
							years of <span className={styles.statnumtitle}>experience</span>
						</p>
					</div>
				</div>
				{/* <div className={styles.imagewrap}>
					<Image src='https://picsum.photos/200' layout='fill' alt='image' />
				</div>
				<div className={styles.expertwrap}>
					<Flavortext title='DIGITAL EXPERT' />
					<h2 className={styles.experttitle}>Our Creative Team</h2>
					<div className={styles.arrows}>
						<Link href='/'>
							<a className={styles.arrowleft}>
								<ArrowLeft />
							</a>
						</Link>
						<Link href='/'>
							<a className={styles.arrowright}>
								<ArrowRight />
							</a>
						</Link>
					</div>
					<div className={styles.expertimagewrap}>
						<Image src='https://picsum.photos/200' layout='fill' alt='image' />
					</div>

					<h2 className={styles.expertfooter}>EXPERTS</h2>
				</div> */}
				<div className={styles.whyuswrap}>
					<div className={styles.flavorTextWrap}>
						<Flavortext title='WHY US' />
					</div>
					<h2 className={styles.subflavor1}>Why People Choose Me</h2>
					<p className={styles.largep}>
						I appreciate every client and am ready to help with all the issues
						that they have.
					</p>
					<ul className={styles.listwrap}>
						<li className={styles.listitem}>
							<div className={styles.listimage}>
								<Image
									src='/checkmark.svg'
									alt='checkmark'
									width='24px'
									height='24px'
								/>
							</div>
							<p className={styles.smallp}>
								The approach to each new project is individual, I treat every
								customer equally.
							</p>
						</li>
						<li className={styles.listitem}>
							<div className={styles.listimage}>
								<Image
									src='/checkmark.svg'
									alt='checkmark'
									width='24px'
									height='24px'
								/>
							</div>
							<p className={styles.smallp}>
								My web design company specializes in the professional creation
								of unique sites and mobile applicatoins.
							</p>
						</li>
						<li className={styles.listitem}>
							<div className={styles.listimage}>
								<Image
									src='/checkmark.svg'
									alt='checkmark'
									width='24px'
									height='24px'
								/>
							</div>
							<p className={styles.smallp}>
								Open lines of communication and a strong work ethic for all who
								choose me.
							</p>
						</li>
					</ul>
				</div>
				<div className={styles.iconswrap}>
					<div className={`${styles.iconblock} ${styles.iconblockodd}`}>
						<div className={styles.iconposition}>
							<div className={styles.triangle}>
								<TriangleBorder />
							</div>
							<div className={styles.atom}>
								<Atom />
							</div>
							<p className={styles.icontitle}>Huge Experience</p>
						</div>
					</div>
					<div className={styles.iconblock}>
						<div className={styles.iconposition}>
							<div className={styles.triangle}>
								<TriangleBorder />
							</div>
							<div className={styles.atom}>
								<Lightbulb />
							</div>
							<p className={styles.icontitle}>Clean Strategy</p>
						</div>
					</div>
					<div className={`${styles.iconblock} ${styles.iconblockodd}`}>
						<div className={styles.iconposition}>
							<div className={styles.triangle}>
								<TriangleBorder />
							</div>
							<div className={styles.atom}>
								<Puzzle />
							</div>
							<p className={styles.icontitle}>Modern Approach</p>
						</div>
					</div>
					<div className={styles.iconblock}>
						<div className={styles.iconposition}>
							<div className={styles.triangle}>
								<TriangleBorder />
							</div>
							<div className={styles.atom}>
								<Glasses />
							</div>
							<p className={styles.icontitle}>Strong Team</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
