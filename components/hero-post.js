import Link from 'next/link';

export default function HeroPost({ title, slug }) {
	return (
		<section>
			<div>
				<div>
					<h3>
						<Link as={`/posts/${slug}`} href='/posts/[slug]'>
							<a>{title}</a>
						</Link>
					</h3>
				</div>
			</div>
		</section>
	);
}
