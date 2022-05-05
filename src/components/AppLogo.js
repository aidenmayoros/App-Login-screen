import logo from "../images/expenseTrackerLogo.png";

export default function AppLogo() {
	return (
		<img
			src={logo}
			width='150'
			height='150'
			alt='Logo'
			className='appLogo'></img>
	);
}
