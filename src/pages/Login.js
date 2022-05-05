import { useState } from "react";
import InputField from "../components/InputField";
import FormButton from "../components/FormButton";
import AppLogo from "../components/AppLogo";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

export default function LoginScreen({ login }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let navigate = useNavigate();

	function onClickLogin() {
		let goToHomePage = () => {
			navigate("/home");
		};

		if (email === "" || password === "") {
			return;
		}
		login({ email: email, password: password });
		goToHomePage();
	}

	function onClickRegister() {
		let goToRegisterPage = () => {
			navigate("/register");
		};

		goToRegisterPage();
	}

	return (
		<div className='loginScreen'>
			<div className='loginPageHeader'>
				<AppLogo />
				<h1>Welcome to Expense Tracker</h1>
				<h3>Please Sign in or Register</h3>
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
			<Button variant='outlined' sx={{ width: "20ch" }} onClick={onClickLogin}>
				Login
			</Button>
			<hr></hr>
			<Button
				variant='outlined'
				sx={{ width: "20ch" }}
				onClick={onClickRegister}>
				Register
			</Button>
		</div>
	);
}
