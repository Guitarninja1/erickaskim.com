import Header from './Header';
import Footer from './Footer';

export default function Page({ children }) {
	return (
		<div className='page--wrapper'>
			<Header />
			<div className='page--children'>{children}</div>
			<Footer />
		</div>
	);
}
