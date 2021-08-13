import Triangle from './svg/Triangle';

export default function Flavortext(props) {
	const { title } = props;
	return (
		<div className='flavortext--wrapper'>
			<Triangle />
			<h3 className='flavortext'>{title}</h3>
		</div>
	);
}
