export default function InTouch() {
	return (
		<div className='intouch--wrapper'>
			<h2 className='intouch--title'>Always be in touch</h2>
			<label htmlFor='email'>email</label>
			<input type='email' id='email' />
			<label htmlFor='checkbox'>I accept all Terms and Conditions</label>
			<input type='checkbox' id='checkbox' />
		</div>
	);
}
