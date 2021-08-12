import Resume from '../components/Resume';
import ServicePreview from '../components/Previews/ServicePreview';
import PortfolioPreview from '../components/Previews/PortfolioPreview';
import InTouch from '../components/Previews/InTouch';
import WWDPreview from '../components/Previews/WWDPreview';
import BlogPreview from '../components/Previews/BlogPreview';

export default function home() {
	return (
		<main>
			<div className='index--wrapper'>
				<Resume />
				<ServicePreview />
				<PortfolioPreview />
				<div className='cases--wrapper'>
					<h2 className='cases--title'>CASES</h2>
				</div>
				<InTouch />
				<div className='digital--wrapper'>
					<h2 className='digital--title'>DIGITAL</h2>
				</div>
				<WWDPreview />
				<BlogPreview />
			</div>
		</main>
	);
}
