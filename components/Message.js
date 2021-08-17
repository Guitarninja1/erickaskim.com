import styles from './Message.module.css';

export default function Message() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Send Us A Message</h2>
			<form className={styles.items}>
				<label htmlFor='name' className='sr-only'>
					Name
				</label>
				<input
					type='text'
					id='name'
					placeholder='Name'
					className={styles.content}
				/>
				<label htmlFor='email' className='sr-only'>
					Email
				</label>
				<input
					type='email'
					id='email'
					placeholder='E-mail'
					className={styles.content}
				/>
				<label htmlFor='tel' className='sr-only'>
					Phone
				</label>
				<input
					type='tel'
					id='tel'
					placeholder='Phone #'
					className={styles.content}
				/>
				<textarea placeholder='Comment' className={styles.content} />
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
