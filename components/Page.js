import Header from './Header';
import Footer from './Footer';

export default function Page({ children }) {
	return (
		<div className='Page-component'>
			<Header />
			<div className='children'>{children}</div>
			<Footer />
		</div>
	);
}
