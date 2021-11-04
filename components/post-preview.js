import Link from 'next/link';

export default function PostPreview({ title, date, slug }) {
	return (
		<div>
			<h3 className='text-3xl mb-3 leading-snug'>
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a>{title}</a>
				</Link>
			</h3>
			<p>{date}</p>
		</div>
	);
}
