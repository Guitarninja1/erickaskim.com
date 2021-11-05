import Blog from '../views/Blog';
import { getAllPosts } from '../lib/api';

export default Blog;

export async function getStaticProps() {
	const allPosts = getAllPosts(['title', 'slug']);
	return {
		props: { allPosts },
	};
}
