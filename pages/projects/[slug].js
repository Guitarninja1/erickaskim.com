import Header from '../../components/Header';
import { getAllProjects, getProjectBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import Image from 'next/image';
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
} from 'react-share';
import Title_BCrumbs from '../../components/Title_BCrumbs';

const Project = (props) => {
	const { title, slug, image, date, content } = props;
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
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'bottom',
				}}
			>
				<Header />
				<Title_BCrumbs page={title} />
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
								minHeight: '178px',
								minWidth: '330px',
								marginTop: '50px',
							}}
						>
							<Image src={image} alt={title} layout='fill' />
						</div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<p style={{ fontSize: '14px' }}>{date}</p>
							<div style={{ margin: '0 6px' }}>
								<FacebookShareButton url={slug}>
									<FacebookIcon size={22} round={true} />
								</FacebookShareButton>
							</div>
							<TwitterShareButton url={slug}>
								<TwitterIcon size={22} round={true} />
							</TwitterShareButton>
						</div>
						<h2
							style={{ fontFamily: 'Raleway', fontSize: '24px', color: '#fff' }}
							dangerouslySetInnerHTML={{ __html: title }}
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
							dangerouslySetInnerHTML={{ __html: content }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;

export async function getStaticProps(args) {
	const { params } = args;
	const paramsSlug = params.slug;
	const projectData = ['title', 'slug', 'content', 'image', 'date'];
	const project = getProjectBySlug(paramsSlug, projectData);
	const projectContent = project.content;
	const projectContentWithDefault = projectContent || '';
	const content = await markdownToHtml(projectContentWithDefault);
	const p = {
		props: {
			...project,
			content,
		},
	};
	return p;
}
export async function getStaticPaths() {
	const projects = getAllProjects(['slug']);
	return {
		paths: projects.map((project) => {
			return {
				params: {
					slug: project.slug,
				},
			};
		}),
		fallback: false,
	};
}
