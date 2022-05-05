import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import { createServer } from "miragejs";
import mockExpenses from "./Data/mockExpenses";
import mockIncome from "./Data/mockIncome";
import Navbar from "./components/Navbar";

let server = createServer();
const mockUser = { id: 1, name: "Bob" };

server.get("/api/users", mockUser);
server.get("/api/expenses", mockExpenses);
server.get("/api/income", mockIncome);

export default function App() {
	const [user, setUser] = useState();

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<LoginPage login={setUser} />} />
				<Route path='/register' element={<RegisterPage register={setUser} />} />
				<Route path='/home' element={<HomePage user={user} />} />
			</Routes>
		</Router>
	);
}
