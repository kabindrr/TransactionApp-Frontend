import React from "react";
import { Table } from "react-bootstrap";
import { useUser } from "../context/UserContext";

export const TransactionTable = () => {
  const { transactions } = useUser();
  console.log(transactions);
  const total = transactions.reduce((acc, item) => {
    return item.type === "income" ? acc + item.amount : acc - item.amount;
  }, 0);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Deposit</th>
          <th>Expenses</th>
        </tr>
      </thead>
      <tbody>
        {transactions.length > 0 &&
          transactions.map((t, i) => (
            <tr key={t._id}>
              <td>{i + 1}</td>
              <td>{t.createdAt.slice(0, 10)}</td>

              <td>{t.title}</td>

              {t.type === "expenses" && (
                <>
                  <td></td>
                  <td>-${t.amount}</td>
                </>
              )}
              {t.type === "income" && (
                <>
                  <td>${t.amount}</td>
                  <td></td>
                </>
              )}
            </tr>
          ))}

        <tr>
          <td colSpan={4} className="fw-bold text-center">
            Total Balance
          </td>
          <td className="fw-bold">${total}</td>
        </tr>
      </tbody>
    </Table>
  );
};
