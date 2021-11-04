import Header from '../../components/Header';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

const Post = (props) => {
	return (
		<>
			<Header />
			<h2 dangerouslySetInnerHTML={{ __html: props.post.title }} />
			<div dangerouslySetInnerHTML={{ __html: props.post.content }} />
		</>
	);
};

export default Post;

export async function getStaticProps(args) {
	const { params } = args;
	const paramsSlug = params.slug;
	const postData = ['title', 'slug', 'content'];
	const post = getPostBySlug(paramsSlug, postData);
	const postContent = post.content;
	const postContentWithDefault = postContent || '';
	const content = await markdownToHtml(postContentWithDefault);
	const p = {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
	return p;
}
export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);
	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
