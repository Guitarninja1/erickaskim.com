import styles from './Comment.module.css';

export default function Message() {
	return (
		<div className={styles.Wrapper}>
			<h2 className={styles.Title}>Leave A Comment</h2>
			<form className={styles.Form}>
				<label htmlFor='message--text' className='sr-only'>
					Name
				</label>
				<input
					type='text'
					id='message--text'
					placeholder='Name *'
					className={styles.Input}
					required={true}
				/>
				<label htmlFor='message--email' className='sr-only'>
					Email
				</label>
				<input
					type='email'
					id='message--email'
					placeholder='E-mail *'
					className={styles.Input}
					required={true}
				/>
				<label htmlFor='message--tel' className='sr-only'>
					Phone
				</label>
				<input
					type='tel'
					id='message--tel'
					placeholder='Phone #'
					className={styles.Input}
				/>
				<label htmlFor='message--textarea' className='sr-only'>
					Comment Section
				</label>
				<textarea
					rows='5'
					cols='30'
					id='message--textarea'
					placeholder='Comment'
					className={`${styles.TextArea} ${styles.Input}`}
				/>
				<button
					type='submit'
					id='submit'
					value='Submit'
					className={styles.Submit}
				>
					<span className={styles.Button}>Post Comment</span>
				</button>
			</form>
		</div>
	);
}
