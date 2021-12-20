import Portfolio from '../views/Portfolio';
import { getAllProjects } from '../lib/api';

export default Portfolio;
export async function getStaticProps() {
	const allProjects = getAllProjects([
		'title',
		'slug',
		'image',
		'description',
		'date',
	]);
	return {
		props: { allProjects },
	};
}
