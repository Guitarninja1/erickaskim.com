import Triangle from '../components/svg/Triangle';
import Image from 'next/image';
import Link from 'next/link';
import Service from '../components/Service';
import WhatWeDo from '../components/WhatWeDo';
import BlogLink from '../components/BlogLink';

export default function home() {
	return (
		<main>
			<div className='index--wrapper'>
				<div className='index--first'>
					<div className='index--slider'>
						<div className='index--wrapper__flavortext'>
							<Triangle></Triangle>
							<h3 className='index--flavortext'>Digital Dominance</h3>
						</div>
						<h2>Resume</h2>
						<p className='index--resume'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							eget erat luctus, condimentum lectus eu, egestas tortor.
						</p>
					</div>
					<ul className='index--ul'>
						<li>01.-----</li>
						<li>02.---</li>
						<li>03.---</li>
					</ul>
				</div>
				<div className='index--second'>
					<div className='index--services'>
						<Triangle className='triangle'></Triangle>
						<h3 className='index--second__flavortext'>Digital Dominance</h3>
						<h2>Develop Digital Products</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.
						</p>
						<Link href='#'>
							<a>View All ➡️</a>
						</Link>
					</div>
					<Service
						imageSrc='https://picsum.photos/200/300'
						imageAlt='#'
						text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
						link='#'
						title='Web Development'
					/>
					<Service
						imageSrc='https://picsum.photos/200/300'
						imageAlt='#'
						text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
						link='#'
						title='SEO Optomization'
					/>
					<Service
						imageSrc='https://picsum.photos/200/300'
						imageAlt='#'
						text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
						link='#'
						title='Ui/UX Design'
					/>
				</div>
				<div className='index--third'>
					<Triangle></Triangle>
					<h3 className='index--portfolio'>Portfolio</h3>
					<h2>Check Our Latest Cases</h2>
					<Link href='#'>
						<a>View All ➡️</a>
					</Link>
					<Image
						src='https://picsum.photos/200/300'
						width='100%'
						height='100%'
						alt='rando'
					></Image>
					<Image
						src='https://picsum.photos/200/300'
						width='100%'
						height='100%'
						alt='rando'
					></Image>
					<Image
						src='https://picsum.photos/200/300'
						width='100%'
						height='100%'
						alt='rando'
					></Image>
				</div>
				<div className='index--fourth'>
					<h2 className='index--cases'>CASES</h2>
					<h2>Always be in touch</h2>
					<label htmlFor='email'>email</label>
					<input type='email' id='email' />
					<label htmlFor='checkbox'>I accept all Terms and Conditions</label>
					<input type='checkbox' id='checkbox' />
				</div>
				<div className='index--fifth'>
					<h1>DIGITAL</h1>
				</div>
				<div className='index--sixth'>
					<div className='index--whatwedo'>
						<Triangle />
						<h3 className='index--digital__flavortxt'>What We Do</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.
						</p>
					</div>
					<div className='index--wwditems'>
						<WhatWeDo
							title='Branding'
							text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
							image='https://picsum.photos/200/300'
							imageAlt='alt'
						/>
						<WhatWeDo
							title='Strategy'
							text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
							image='https://picsum.photos/200/300'
							imageAlt='alt'
						/>
						<WhatWeDo
							title='ECommerce'
							text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
							image='https://picsum.photos/200/300'
							imageAlt='alt'
						/>
						<WhatWeDo
							title='Support'
							text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							fringilla facilisis tortor non eleifend. Ut.'
							image='https://picsum.photos/200/300'
							imageAlt='alt'
						/>
					</div>
				</div>
				<div className='index--seventh'>
					<div className='index--blog-head'>
						<Triangle />
						<h3 className='index--digital__flavortxt'>Blog</h3>
						<h2>The Latest News In Digital</h2>
						<Link href='#'>READ BLOG ➡️</Link>
					</div>
					<div className='index--blog-body'>
						<BlogLink
							image='https://picsum.photos/200/300'
							imageAlt='alt'
							name='Erick Askim'
							date='Aug 9, 2021'
							share='#'
							title='Lorem Ipsum'
							link='#'
						/>
						<BlogLink
							image='https://picsum.photos/200/300'
							imageAlt='alt'
							name='Erick Askim'
							date='Aug 9, 2021'
							share='#'
							title='Lorem Ipsum'
							link='#'
						/>
						<BlogLink
							image='https://picsum.photos/200/300'
							imageAlt='alt'
							name='Erick Askim'
							date='Aug 9, 2021'
							share='#'
							title='Lorem Ipsum'
							link='#'
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
