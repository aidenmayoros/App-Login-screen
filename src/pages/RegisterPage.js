import { useState } from "react";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import AppLogo from "../components/AppLogo";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

export default function RegisterScreen({ register }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let navigate = useNavigate();
	let returnToLoginPage = () => {
		navigate("/");
	};

	function onClickRegister() {
		if (email === "" || password === "") {
			return;
		}

		register({ email: email, password: password });
		returnToLoginPage();
	}

	function goToLoginPage() {
		returnToLoginPage();
	}

	return (
		<div className='loginScreen'>
			<div className='loginPageHeader'>
				<AppLogo />
				<h1>Welcome to Expense Tracker</h1>
				<h3>Please enter a username and password to register</h3>
				<br></br>
			</div>
			<br></br>
			<FormControl sx={{ width: "25ch" }}>
				<InputLabel htmlFor='outlined-adornment-amount'>Username</InputLabel>
				<OutlinedInput
					id='outlined-adornment-amount'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					label='Username'
				/>
			</FormControl>
			<br></br>
			<FormControl sx={{ width: "25ch" }}>
				<InputLabel htmlFor='outlined-adornment-amount'>Password</InputLabel>
				<OutlinedInput
					id='outlined-adornment-amount'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					label='Password'
					type='password'
				/>
			</FormControl>
			<br></br>
			<Button
				variant='outlined'
				sx={{ width: "20ch" }}
				onClick={onClickRegister}>
				Register
			</Button>
			<hr></hr>
			<Button variant='outlined' sx={{ width: "20ch" }} onClick={goToLoginPage}>
				Cancel
			</Button>
		</div>
	);
}
