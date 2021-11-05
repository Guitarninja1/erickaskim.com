import Link from 'next/link';

export default function HeroPost({ title, slug }) {
	return (
		<section>
			<Link as={`/posts/${slug}`} href='/posts/[slug]'>
				<h3>{title}</h3>
			</Link>
		</section>
	);
}
