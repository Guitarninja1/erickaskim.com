import Header from './Header';
import Flavortext from './Flavortext';

export default function Resume() {
	return (
		<div className='resume'>
			<Header />
			<div className='resume--slider'>
				<Flavortext title='Digital Dominance' />
				<h2>Resume</h2>
				<p className='resume--body'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
					erat luctus, condimentum lectus eu, egestas tortor.
				</p>
			</div>
			<ul className='resume--ul'>
				<li>01.</li>
				<li>02.</li>
				<li>03.</li>
			</ul>
		</div>
	);
}
