import Header from './Header';
import Flavortext from './Flavortext';
import styles from './Resume.module.css';

export default function Resume() {
	return (
		<div className={styles.ResumeWrapper}>
			<Header />
			<div className={styles.ResumeSlider}>
				<Flavortext title='Digital Dominance' />
				<h2>Resume</h2>
				<p>
					Effective verbal and written communication in English. Strategically
					coordinate and collaborate with various professionals to maximize
					performance in facilitating goals and attaining operational
					excellence. Possess excellent planning, organization, time management
					and decision-making skills. Self-driven team player with strengths in
					communication and developing interpersonal relationships.
				</p>
				<h3>Skills</h3>
				<ul className={styles.frontEndUl}>
					<li>HTML</li>
					<li>CSS</li>
					<li>Vanilla JavaScript</li>
					<li>ESNext JavaScript</li>
					<li>React</li>
					<li>Nextjs</li>
					<li>Node.js</li>
				</ul>

				<h3>Experience</h3>
				<ul className={styles.experienceUl}>
					<li>Complete Web Design Solution: June 2021 - Current</li>
					<ul>
						<li>
							Update HTML to drive SEO and keeping the site accessible as
							described by WCAG 2.1
						</li>
						<li>Optimize images for the web</li>
						<li>Add and remove products from site</li>
						<li>Update data on site to reflect the changes in inventory</li>
						<li>
							Create product sets linking individual products to an overall set
						</li>
					</ul>
				</ul>
				<h3>Education</h3>
				<ul className={styles.educationUl}>
					<li className={styles.kyle}>
						Apprenticeship Under Kyle Melton: July 6th 2020 - Current <br></br>
						<a className={styles.kylesLink} href='https://kylemelton.dev/'>
							KyleMelton.dev
						</a>
					</li>
					<li>
						<span className={styles.wes}>Wes Bos Courses</span>
						<ul>
							<li>
								<a
									className={styles.linkLi}
									href='https://beginnerjavascript.com/'
								>
									Beginner JavaScript
								</a>
							</li>
							<li>
								<a className={styles.linkLi} href='https://javascript30.com/'>
									JavaScript 30 day vanilla JS coding challenge
								</a>
							</li>
							<li>
								<a
									className={styles.linkLi}
									href='https://reactforbeginners.com/'
								>
									React For Beginners
								</a>
							</li>
							<li>
								<a className={styles.linkLi} href='https://cssgrid.io/'>
									CSS Grid
								</a>
							</li>
							<li>
								<a className={styles.linkLi} href='https://flexbox.io/'>
									What the Flexbox?!
								</a>
							</li>
							<li>
								<a className={styles.linkLi} href='https://advancedreact.com/'>
									Fullstack Advanced React & GraphQL
								</a>
							</li>
							<li>
								<a className={styles.linkLi} href='https://learnnode.com/'>
									Learn Node!
								</a>
							</li>
						</ul>
					</li>
				</ul>
				{/* <h3>Projects</h3>
				<ul></ul> */}
				<h3>Refrences</h3>
				<ul className={styles.refrenceUl}>
					<li>Wade Harned</li>
					<ul>
						<li>
							<a
								className={styles.linkLi}
								href='https://completewebdesignsolution.com/'
							>
								{' '}
								Complete Web Design Solution
							</a>
						</li>
						<li>
							Phone:{' '}
							<a className={styles.linkLi} href='tel:+1-951-892-0893'>
								1-951-892-0893
							</a>
						</li>
					</ul>
				</ul>
				<ul className={styles.refrenceUl}>
					<li>Kyle Melton</li>
					<ul>
						<li>
							<a className={styles.linkLi} href='https://kylemelton.dev/'>
								{' '}
								KyleMelton.dev
							</a>
						</li>
						<li>
							Phone:{' '}
							<a className={styles.linkLi} href='tel:+1-951-212-7174'>
								1-951-212-7174
							</a>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
}
