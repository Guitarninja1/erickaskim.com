import Header from '../../components/Header';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Image from 'next/image';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import Breadcrumbs from '../../components/Breadcrumbs';

const Post = (props) => {
	return (
		<div
			style={{
				backgroundImage: `linear-gradient(
					180deg,
					rgba(255, 69, 91, 0.08) 0%,
					rgba(255, 144, 69, 0) 9%
					)`,
			}}
		>
			<div
				style={{
					backgroundImage: `linear-gradient(
						360deg,
						rgba(255, 69, 91, 0.07) 0%,
						rgba(255, 144, 69, 0) 15%
					), url(/wierd.svg)`,
				}}
			>
				<Header />
				<div
					style={{
						position: 'relative',
						opacity: 0.05,
						fontSize: '70px',
						left: '-10px',
						top: '36px',
						color: 'white',
						ariaHidden: true,
					}}
				>
					{props.post.title}
				</div>
				<div
					style={{
						fontFamily: 'Raleway',
						fontWeight: 900,
						fontSize: '36px',
						fontStyle: 'normal',
						margin: '0 10vw',
						color: '#ffff',
						ariaHidden: true,
					}}
				>
					{props.post.title}
				</div>
				<Breadcrumbs page={props.post.title} />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							margin: '0 15px',
							display: 'inline-flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<div
							style={{
								position: 'relative',
								minHeight: '555px',
								minWidth: '555px',
								marginTop: '50px',
							}}
						>
							<Image
								src={props.post.image}
								alt={props.post.title}
								layout='fill'
							/>
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<p style={{ fontSize: '14px' }}>{props.post.date}</p>
							<div style={{ margin: '0 6px' }}>
								<FacebookShareButton url={props.post.slug}>
									<FacebookIcon size={22} round={true} />
								</FacebookShareButton>
							</div>
							<TwitterShareButton url={props.post.slug}>
								<TwitterIcon size={22} round={true} />
							</TwitterShareButton>
						</div>
						<h2
							styl={{ fontFamily: 'Raleway', fontSize: '24px', color: '#fff' }}
							dangerouslySetInnerHTML={{ __html: props.post.title }}
						/>
						<div
							style={{
								position: 'relative',
								maxWidth: '555px',
								margin: '0 0 100px 0',
								fontSize: '16px',
								lineHeight: '1.5',
								fontFamily: 'Mulish',
							}}
							dangerouslySetInnerHTML={{ __html: props.post.content }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;

export async function getStaticProps(args) {
	const { params } = args;
	const paramsSlug = params.slug;
	const postData = ['title', 'slug', 'content', 'image', 'date'];
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
