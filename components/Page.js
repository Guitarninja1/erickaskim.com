import Footer from './Footer';

export default function Page({ children }) {
	return (
		<div className='page--wrapper'>
			<div className='page--children'>{children}</div>
			<Footer />
		</div>
	);
}
