import Triangle from './svg/Triangle';
import Header from './Header';
export default function Resume() {
	return (
		<div className='resume'>
			<Header />
			<div className='resume--slider'>
				<div className='resume--wrapper__flavortext'>
					<div className='triangle'>
						<Triangle />
					</div>

					<h3 className='resume--flavortext'>Digital Dominance</h3>
				</div>
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
