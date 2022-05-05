import AppLogo from "../components/AppLogo";
import { ShowAllExpenses } from "../components/IncomeAndExpenses";
import { ShowAllIncome } from "../components/IncomeAndExpenses";
import { calculateTotalExpenses } from "../components/IncomeAndExpenses";
import { calculateTotalIncome } from "../components/IncomeAndExpenses";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import IncomeTable from "../components/IncomeTable";
import ExpenseTable from "../components/ExpenseTable";

export default function HomePage({ user }) {

	const [expenses, setExpense] = useState([]);
	const [income, setIncome] = useState([]);
	const [newIncomeType, setnewIncomeType] = useState("");
	const [newExpenseType, setnewExpenseType] = useState("");
	const [newIncomeAmount, setNewIncomeAmount] = useState("");
	const [newExpenseAmount, setNewExpenseAmount] = useState("");

	useEffect(() => {
		if (expenses.length) {
			return;
		}

		fetch("/api/expenses").then((response) => {
			response.json().then((expenseData) => {
				setExpense(expenseData);
			});
		});
	}, [expenses]);

	useEffect(() => {
		if (income.length) {
			return;
		}

		fetch("/api/income").then((response) => {
			response.json().then((incomeData) => {
				setIncome(incomeData);
			});
		});
	}, [income]);

	return (
		<Box
			component='main'
			sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant='h4' gutterBottom component='div'>
					Income
				</Typography>
				<Button sx={{ height: "100%" }} variant='contained'>
					Add Income
				</Button>
			</Box>
			<IncomeTable />
			<Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
				<Typography variant='h4' gutterBottom component='div'>
					Expenses
				</Typography>
				<Button sx={{ height: "100%" }} variant='contained'>
					Add Expense
				</Button>
			</Box>
			<ExpenseTable />
		</Box>
	);
}
