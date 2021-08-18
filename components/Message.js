import styles from './Message.module.css';

export default function Message() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Send Us A Message</h2>
			<p className={styles.text}>
				Pariatur voluptate occaecat nostrud est exercitation. Culpa culpa
				laboris excepteur officia ullamco sunt nisi velit culpa.
			</p>
			<form className={styles.items}>
				<label htmlFor='name' className='sr-only'>
					Name
				</label>
				<input
					type='text'
					id='message--name'
					placeholder='Name *'
					className={styles.content}
					required='true'
				/>
				<label htmlFor='email' className='sr-only'>
					Email
				</label>
				<input
					type='message--email'
					id='email'
					placeholder='E-mail *'
					className={styles.content}
					required='true'
				/>
				<label htmlFor='tel' className='sr-only'>
					Phone
				</label>
				<input
					type='tel'
					id='message--tel'
					placeholder='Phone #'
					className={styles.content}
				/>
				<textarea
					rows='5'
					cols='30'
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
