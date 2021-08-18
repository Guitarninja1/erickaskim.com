import Link from 'next/link';
import styles from './InTouch.module.css';

export default function InTouch() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Always Be In Touch</h2>
			<p className={styles.text}>
				Subscribe if you want always to be known about all the news and
				available propositions.
			</p>
			<div className={styles.items}>
				<label htmlFor='email' className='sr-only'>
					email
				</label>
				<input
					type='email'
					id='intouch--email'
					className={styles.emailinput}
					placeholder='Enter Your E-mail'
				/>
				<div className={styles.container}>
					<input
						type='checkbox'
						id='checkbox'
						className={styles.checkbox}
					></input>
					<label htmlFor='checkbox'>
						<div className={styles.foo}>
							<span className={styles.label}>I accept all</span>
							<Link href='/'>
								<a className={styles.terms}>Terms and Conditions</a>
							</Link>
						</div>
					</label>
				</div>
			</div>
		</div>
	);
}
