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
				</ul>
				<h3>Education</h3>
				<ul className={styles.educationUl}>
					<li>
						Apprenticeship Under Kyle Melton: July 6th 2020 - Current <br></br>
						<a className={styles.kylesLink} href='https://kylemelton.dev/'>
							KyleMelton.dev
						</a>
					</li>
					<li>
						<h4>Wes Bos Courses</h4>
						<ul>
							<li>
								<a href='https://beginnerjavascript.com/'>
									Beginner JavaScript
								</a>
							</li>
							<li>
								<a href='https://javascript30.com/'>
									JavaScript 30 day vanilla JS coding challenge
								</a>
							</li>
							<li>
								<a href='https://reactforbeginners.com/'>React For Beginners</a>
							</li>
							<li>
								<a href='https://cssgrid.io/'>CSS Grid</a>
							</li>
							<li>
								<a href='https://flexbox.io/'>What the Flexbox?!</a>
							</li>
							<li>
								<a href='https://advancedreact.com/'>
									Fullstack Advanced React & GraphQL
								</a>
							</li>
							<li>
								<a href='https://learnnode.com/'>Learn Node!</a>
							</li>
						</ul>
					</li>
				</ul>
				<h3>Projects</h3>
				<ul></ul>
				<h3>Refrences</h3>
				<ul></ul>
				{/* 
					projects
					education
					contact
				*/}
			</div>
		</div>
	);
}
