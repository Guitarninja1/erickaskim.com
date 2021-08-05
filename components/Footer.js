export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p className='footer--footer'>&copy; Erick Askim {year}</p>
		</footer>
	);
}
