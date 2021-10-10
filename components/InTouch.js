import Link from 'next/link';
import styles from './InTouch.module.css';

export default function InTouch() {
	return (
		<div className={styles.TopWrap}>
			<div className={styles.Wrapper}>
				<h2 className={styles.Title}>Always Be In Touch</h2>
				<p className={styles.Text}>
					Subscribe if you want always to be known about all the news and
					available propositions.
				</p>
				<div className={styles.Inputs}>
					<label htmlFor='intouch--email' className='sr-only'>
						email
					</label>
					<input
						type='email'
						id='intouch--email'
						className={styles.EmailInput}
						placeholder='Enter Your E-mail'
					/>
					<div className={styles.Container}>
						<input type='checkbox' id='checkbox' className={styles.Checkbox} />
						<label htmlFor='checkbox'>
							<p className={styles.Accept}>
								<span className={styles.Label}>I accept all</span>
								<Link href='/'>
									<a className={styles.Terms}>Terms and Conditions</a>
								</Link>
							</p>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
