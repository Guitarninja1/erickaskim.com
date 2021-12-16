import styles from './Portfolio.module.css';
import Header from '../components/Header';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import Image from 'next/image';
import Title_BCrumbs from '../components/Title_BCrumbs';

export default function portfolio(props) {
	const allProjects = props.allProjects;
	return (
		<div className={styles.TopWrapper}>
			<div className={styles.BottomWrapper}>
				<Header />
				<Title_BCrumbs page='Portfolio' />
				<ul className={styles.ProjectList}>
					{allProjects.map((project) => (
						<li className={styles.ProjectListLi} key={project.slug}>
							<div className={styles.ImageWrap}>
								<a
									className={styles.ImageWrap}
									href={`/projects/${project.slug}`}
								>
									<Image
										src={project.image}
										alt={project.title}
										layout='fill'
									/>
								</a>
							</div>
							<div className={styles.ProjectListText}>
								<div className={styles.ProjectData}>
									<p>{project.date}</p>
									<div className={styles.Share}>
										<div className={styles.FB}>
											<FacebookShareButton url={project.slug}>
												<FacebookIcon size={22} round={true} />
											</FacebookShareButton>
										</div>
										<TwitterShareButton url={project.slug}>
											<TwitterIcon size={22} round={true} />
										</TwitterShareButton>
									</div>
								</div>
								<a className={styles.Link} href={`/projects/${project.slug}`}>
									<h3 className={styles.projectTitle}>{project.title}</h3>
								</a>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
