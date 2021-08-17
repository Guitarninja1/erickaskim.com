import styles from './InTouch.module.css';

export default function InTouch() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Always be in touch</h2>
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
					id='email'
					className={styles.emailinput}
					placeholder='Enter Your E-mail'
				/>
				<div className={styles.container}>
					<label htmlFor='checkbox' className='sr-only' />
					<input
						type='checkbox'
						id='checkbox'
						className={styles.checkbox}
					></input>
					<p className={styles.label}>I accept all</p>
					<p className={styles.terms}>Terms and Conditions</p>
				</div>
			</div>
		</div>
	);
}
