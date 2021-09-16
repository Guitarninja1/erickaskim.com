import styles from './Circle.module.css';

export default function Circle(props) {
	const { percent } = props;
	let value = ([percent] / 100) * 270 - 270;
	return (
		<svg
			className={styles.SVG}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='-1 -1 45 45'
		>
			<defs>
				<linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
					<stop offset='0%' stopColor='#FF7245' />
					<stop offset='100%' stopColor='#FF455B' />
				</linearGradient>
			</defs>
			<circle
				className={styles.Circle}
				cx='50'
				cy='50'
				r='43'
				stroke='#5a5a5a5c'
				strokeDasharray='1000'
				strokeWidth='15px'
				fill='none'
			/>
			<circle
				className={styles.Circle}
				cx='50'
				cy='50'
				r='43'
				stroke='rgba(255, 255, 255, 0.1)'
				strokeDasharray='1000'
				strokeWidth='2px'
				fill='none'
			/>
			<circle
				className={styles.PercentCircle}
				cx='50'
				cy='50'
				r='43'
				stroke='url(#linear)'
				strokeWidth='5px'
				strokeLinecap='round'
				fill='none'
				transform='rotate(-90 50 50)'
				strokeDasharray='270.176, 270.176'
				strokeDashoffset={value}
			/>
			<text className={styles.PercentWrap} x='33' y='57' fill='#ffffff'>
				{percent}%
			</text>
		</svg>
	);
}
