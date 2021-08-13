export default function Message() {
	return (
		<div className='message--wrapper'>
			<h2>Send Us A Message</h2>
			<p></p>
			<form>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' />
				<label htmlFor='email'>Email</label>
				<input type='email' id='email' />
				<label htmlFor='tel'>Phone</label>
				<input type='tel' id='tel' />
				<textarea defaultValue='Comment' />
				<input type='submit' value='Submit' className='message--submit' />
			</form>
		</div>
	);
}
