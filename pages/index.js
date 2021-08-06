import Triangle from '../components/svg/Triangle';

export default function Home() {
	return (
		<main>
			<div className='index--wrapper'>
				<div className='index--ft__wrapper'>
					<Triangle></Triangle>
					<h3 className='index--flavortext'>Digital Dominance</h3>
				</div>
				<h2>Resume</h2>
				<p className='p--resume'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
					erat luctus, condimentum lectus eu, egestas tortor.
				</p>
				<div className='index--bg' />
			</div>
		</main>
	);
}
