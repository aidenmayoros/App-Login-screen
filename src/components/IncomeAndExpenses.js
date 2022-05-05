import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIncome from "./AddIncome";
import AddExpense from "./AddExpenses";
import { useEffect } from "react";

export function ShowAllIncome(income, setIncome) {
	return (
		<div className='expenseData'>
			{income.map((item, index) => {
				return (
					<div className='each-expense' key={index}>
						<IconButton
							aria-label='delete'
							size='small'
							onClick={() => {
								setIncome(income.filter((_, i) => i != index));
							}}>
							<DeleteIcon fontSize='inherit' />
						</IconButton>
						<p>
							{item.type}: {item.date} - {"$" + item.amount}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export function ShowAllExpenses(expenses) {
	return (
		<div className='expenseData'>
			{expenses.map((expense, index) => {
				return (
					<div className='each-expense' key={index}>
						<IconButton
							aria-label='delete'
							size='small'
							onClick={() => console.log(index)}>
							<DeleteIcon fontSize='inherit' />
						</IconButton>
						<p>
							{expense.name} - {"$" + expense.price}
						</p>
					</div>
				);
			})}
		</div>
	);
}

export function calculateTotalExpenses(expenses) {
	let totalExpenses = expenses.reduce(
		(previousValue, currentValue) => previousValue + currentValue.price,
		0
	);

	return totalExpenses.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
}

export function calculateTotalIncome(income) {
	let totalIncome = income.reduce(
		(previousValue, currentValue) => previousValue + currentValue.amount,
		0
	);

	return totalIncome.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
}
