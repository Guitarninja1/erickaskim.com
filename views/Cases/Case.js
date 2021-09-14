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
		<div className={styles.TopWrap}>
			<Header />
			<div className={styles.PageTitleWrapper}>
				<h2 className={styles.PageTitle}>CASE</h2>
				<Breadcrumbs page='Case' />
			</div>
			<div className={styles.CaseImageWrap}>
				<Image src='https://picsum.photos/200' layout='fill' alt='image' />
			</div>
			<div className={styles.ArrowWrap}>
				<Link href='/'>
					<a className={styles.ArrowLeftWrap}>
						<ArrowLeft className={styles.ArrowLeft} />
					</a>
				</Link>
				<Link href='/'>
					<a className={styles.ArrowRightWrap}>
						<ArrowRight className={styles.ArrowRight} />
					</a>
				</Link>
			</div>
			<div className={styles.AboutWrap}>
				<h2 className={styles.Title}>About Project</h2>
				<p className={styles.Text}>
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
					className={styles.Submit}
				>
					<p className={styles.Button}>Visit The Site</p>
				</button>
			</div>
			<div className={styles.ClientInfoWrap}>
				<div className={styles.BorderTop} />
				<div className={styles.InfoWrap}>
					<h6 className={styles.InfoTitle}>Client:</h6>
					<p className={styles.InfoText}>OSH Marketing Company</p>
				</div>
				<div className={styles.InfoWrap}>
					<h6 className={styles.InfoTitle}>Category:</h6>
					<p className={styles.InfoText}>Web Development</p>
				</div>
				<div className={styles.InfoWrap}>
					<h6 className={styles.InfoTitle}>Start Date:</h6>
					<p className={styles.InfoText}>20 Oct 2021</p>
				</div>
				<div className={styles.InfoWrap}>
					<h6 className={styles.InfoTitle}>Finish Date:</h6>
					<p className={styles.InfoText}>20 Nov 2021</p>
				</div>
				<div className={styles.InfoWrap}>
					<h6 className={styles.InfoTitleShare}>Share:</h6>
				</div>
				<div className={styles.Social}>
					<Link href='/'>
						<a className={styles.SocialLink}>Fb</a>
					</Link>
					<Link href='/'>
						<a className={styles.SocialLink}>Tw</a>
					</Link>
					<Link href='/'>
						<a className={styles.SocialLink}>In</a>
					</Link>
				</div>
				<div className={styles.BorderBottom} />
			</div>
			<div className={styles.RelatedWrap}>
				<Flavortext title='portfolio' />
				<h2 className={styles.RelatedTitle}>Related Cases</h2>
				<div className={styles.MainImageWrap}>
					<div className={styles.PreviewImageWrap}>
						<Image src='https://picsum.photos/200' layout='fill' alt='image' />
					</div>
					<div className={styles.PreviewImageWrap}>
						<Image src='https://picsum.photos/200' layout='fill' alt='image' />
					</div>
					<div className={styles.PreviewImageWrap}>
						<Image src='https://picsum.photos/200' layout='fill' alt='image' />
					</div>
				</div>
				<h2 className={styles.Related}>RELATED</h2>
			</div>
			<InTouch />
		</div>
	);
}
