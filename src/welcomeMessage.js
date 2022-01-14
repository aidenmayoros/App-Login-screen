import FormButton from "./formButton";

export default function WelcomeMessage({ user, logout }) {
	function onClickLogOut() {
		logout(null);
	}

	return (
		<>
			<h1>Welcome {user.email}</h1>
			<hr className='welcomeScreenLine'></hr>
			<FormButton
				name='Logout'
				styles={"logoutButton"}
				handleClick={onClickLogOut}
			/>
		</>
	);
}
