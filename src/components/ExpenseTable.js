import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { faker } from "@faker-js/faker";

const expenseTypes = [
	"Gas",
	"Rent",
	"Mortgage",
	"Phone Bill",
	"Food",
	"Eating out",
	"Gifts",
	"Insurance",
	"Car Repairs",
	"Date Night",
	"Doctor Visit",
];

const CURRENT_ICON = "$";

function formatMoney(float) {
	return CURRENT_ICON + Math.round(float * 100) / 100;
}

function createExpenseType(index) {
	return expenseTypes[index];
}

function createData(expenseType, amount, date) {
	return { expenseType, amount, date };
}

const rows = new Array(10).fill(null).map(() => {
	return createData(
		createExpenseType(Math.floor(Math.random() * 11)),
		faker.finance.amount(50, 1300, 2)
	);
});

export default function ExpenseTable() {
	const totalExpenses = rows.reduce((acc, row) => {
		return acc + Number.parseFloat(row.amount);
	}, 0);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Expense Type</TableCell>
						<TableCell>Expense Amount</TableCell>
						<TableCell>Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => {
						return (
							<TableRow
								key={i}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell>{row.expenseType}</TableCell>
								<TableCell>{formatMoney(row.amount)}</TableCell>
								<TableCell>04/15/2022</TableCell>
							</TableRow>
						);
					})}
					<TableRow>
						<TableCell>
							<b>Total Expenses</b>
						</TableCell>
						<TableCell>
							<b>{formatMoney(totalExpenses)}</b>
						</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
