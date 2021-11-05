import Link from 'next/link';
import DateFormatter from './date-formatter';

export default function HeroPost({ title, slug, date }) {
	return (
		<section>
			<Link passhref={`/posts/${slug}`}>
				<h3>{title}</h3>
			</Link>
			<DateFormatter dateString={date} />
		</section>
	);
}
