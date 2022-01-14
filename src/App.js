import { useState } from "react";
import "./App.css";
import logo from "./images/logo.png";
import WelcomeMessage from "./welcomeMessage";
import Form from "./form";

function LoginScreen({ user, updateUser }) {
	return (
		<div className='app'>
			<img className='icon' src={logo} alt='Logo'></img>
			<div className='app_name'>App name</div>
			{user ? (
				<WelcomeMessage user={user} logout={updateUser} />
			) : (
				<Form login={updateUser} />
			)}
		</div>
	);
}

export default function App() {
	const [user, setUser] = useState(null);
	return <LoginScreen user={user} updateUser={setUser} />;
}
