import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useUser } from "../context/UserContext";

const MyBarChart = () => {
  const { transactions, getTransactions } = useUser();

  useEffect(() => {
    getTransactions();
  }, []);

  const chartData = transactions.map((transaction) => ({
    name: transaction.tdate.slice(0, 10), 
    Income: transaction.type == "income" ? transaction.amount : 0, 
    Expenses: transaction.type == "expenses" ? -transaction.amount : 0,
    
  }));

  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expenses")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalBalance = totalIncome - totalExpenses;

  const balanceColor = totalBalance >= 0 ? "green" : "red";
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <div className="text-center">
          <strong style={{ color: balanceColor }}>
            Total Balance=${totalBalance}
          </strong>
        </div>

        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="green" />
          <Bar dataKey="Expenses" fill="red" />
          <br />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default MyBarChart;
