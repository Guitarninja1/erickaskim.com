import Page from '../components/Page';
import '../styles/Global.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
}
