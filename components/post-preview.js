import Link from 'next/link';

export default function PostPreview({ title, date, slug }) {
	return (
		<div>
			<Link as={`/posts/${slug}`} href='/posts/[slug]'>
				<h3>{title}</h3>
			</Link>
			<p>{date}</p>
		</div>
	);
}
