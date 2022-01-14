import { useState } from "react";
import InputField from "./inputField";
import FormButton from "./formButton";

export default function Form({ login }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function onClickLogin() {
		if (email == "" || password == "") {
			return;
		}
		login({ email: email, password: password });
	}

	return (
		<>
			<InputField name='Email' value={email} onChange={setEmail} />
			<InputField
				name='Password'
				type='password'
				value={password}
				onChange={setPassword}
			/>
			<FormButton
				name='Login'
				styles={"formButton"}
				handleClick={onClickLogin}
			/>
			<hr></hr>
			<FormButton
				name='Register'
				styles={"formButton"}
				handleClick={onClickLogin}
			/>
		</>
	);
}
