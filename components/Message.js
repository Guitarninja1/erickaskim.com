import styles from './Message.module.css';

export default function Message() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Send Me A Message</h2>
			<p className={styles.text}>
				Interested in having a site made? Want to have work done on an existing
				site? Send me a message!
			</p>
			<form className={styles.items}>
				<label htmlFor='message--text' className='sr-only'>
					Name
				</label>
				<input
					type='text'
					id='message--text'
					placeholder='Name *'
					className={styles.content}
					required={true}
				/>
				<label htmlFor='message--email' className='sr-only'>
					Email
				</label>
				<input
					type='email'
					id='message--email'
					placeholder='E-mail *'
					className={styles.content}
					required={true}
				/>
				<label htmlFor='message--tel' className='sr-only'>
					Phone
				</label>
				<input
					type='tel'
					id='message--tel'
					placeholder='Phone #'
					className={styles.content}
				/>
				<label htmlFor='message--textarea' className='sr-only'>
					Comment Section
				</label>
				<textarea
					rows='5'
					cols='30'
					id='message--testarea'
					placeholder='Comment'
					className={styles.textarea}
				/>
				<button
					type='submit'
					id='submit'
					value='Submit'
					className={styles.submit}
				>
					<p className={styles.btn}>Submit</p>
				</button>
			</form>
		</div>
	);
}
