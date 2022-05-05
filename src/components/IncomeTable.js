import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { faker } from "@faker-js/faker";

const incomeTypes = ["Paycheck", "Side hussle", "Gift"];
const CURRENT_ICON = "$";

function formatMoney(float) {
	return CURRENT_ICON + Math.round(float * 100) / 100;
}

function createIncomeType(index) {
	return incomeTypes[index];
}

function createData(incomeType, amount, date) {
	return { incomeType, amount, date };
}

const rows = new Array(5).fill(null).map(() => {
	return createData(
		createIncomeType(Math.floor(Math.random() * 3)),
		faker.finance.amount(500, 1500, 2)
	);
});

export default function IncomeTable() {
	const totalIncome = rows.reduce((acc, row) => {
		return acc + Number.parseFloat(row.amount);
	}, 0);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Income Type</TableCell>
						<TableCell>Income Amount</TableCell>
						<TableCell>Date</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, i) => {
						return (
							<TableRow
								key={i}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell>{row.incomeType}</TableCell>
								<TableCell>{formatMoney(row.amount)}</TableCell>
								<TableCell>04/15/2022</TableCell>
							</TableRow>
						);
					})}
					<TableRow>
						<TableCell>
							<b>Total Income</b>
						</TableCell>
						<TableCell>
							<b>{formatMoney(totalIncome)}</b>
						</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
}
