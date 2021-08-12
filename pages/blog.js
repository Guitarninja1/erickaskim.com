import Image from 'next/image';
import Link from 'next/link';
import {
	FacebookIcon,
	FacebookShareButton,
	TwitterIcon,
	TwitterShareButton,
} from 'react-share';

export default function blog() {
	return (
		<div className='blog--wrapper'>
			<div className='blog--items'>
				<h2>Blog</h2>
				<Image
					src='https://picsum.photos/200/300'
					height='100%'
					width='100%'
					alt='image'
				/>
				<p className='blog--p'>Erick Askim</p>
				<p className='blog--p'>Aug 12,2021</p>
				<FacebookShareButton url='#'>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
				<TwitterShareButton url='#'>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
				<p className='blog--p'>Lorem ipsum</p>
				<Link href='#'>
					<a aria-label='Next'>→</a>
				</Link>
			</div>
			<div className='blog--items'>
				<h2>Blog</h2>
				<Image
					src='https://picsum.photos/200/300'
					height='100%'
					width='100%'
					alt='image'
				/>
				<p className='blog--p'>Erick Askim</p>
				<p className='blog--p'>Aug 11,2021</p>
				<FacebookShareButton url='#'>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
				<TwitterShareButton url='#'>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
				<p className='blog--p'>Lorem ipsum</p>
				<Link href='#'>
					<a aria-label='Next'>→</a>
				</Link>
			</div>
			<div className='blog--items'>
				<h2>Blog</h2>
				<Image
					src='https://picsum.photos/200/300'
					height='100%'
					width='100%'
					alt='image'
				/>
				<p className='blog--p'>Erick Askim</p>
				<p className='blog--p'>Aug 10,2021</p>
				<FacebookShareButton url='#'>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
				<TwitterShareButton url='#'>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
				<p className='blog--p'>Lorem ipsum</p>
				<Link href='#'>
					<a aria-label='Next'>→</a>
				</Link>
			</div>
			<div className='blog--items'>
				<h2>Blog</h2>
				<Image
					src='https://picsum.photos/200/300'
					height='100%'
					width='100%'
					alt='image'
				/>
				<p className='blog--p'>Erick Askim</p>
				<p className='blog--p'>Aug 10,2021</p>
				<FacebookShareButton url='#'>
					<FacebookIcon size={32} round={true} />
				</FacebookShareButton>
				<TwitterShareButton url='#'>
					<TwitterIcon size={32} round={true} />
				</TwitterShareButton>
				<p className='blog--p'>Lorem ipsum</p>
				<Link href='#'>
					<a aria-label='Next'>→</a>
				</Link>
			</div>
		</div>
	);
}
