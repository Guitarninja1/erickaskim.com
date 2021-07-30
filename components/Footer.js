export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>&copy; Erick Askim {year}</p>
		</footer>
	);
}
