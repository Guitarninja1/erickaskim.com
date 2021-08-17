import Link from 'next/link';

export default function Breadcrumbs(props) {
	const { page } = props;
	return (
		<ul className='breadcrumbs--ul'>
			<li className='breadcrumbs--li'>
				<Link href='/'>
					<a className='breadcrumbs--li__with-hyphen'>Home</a>
				</Link>
			</li>
			<li className='breadcrumbs--li'>{page}</li>
		</ul>
	);
}
