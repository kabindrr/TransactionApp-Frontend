import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import { CgAddR } from "react-icons/cg";
export const TransactionTable = () => {
  const { transactions } = useUser();
  console.log(transactions);
  const total = transactions.reduce((acc, item) => {
    return item.type === "income" ? acc + item.amount : acc - item.amount;
  }, 0);
  return (
    <>
      <div className="d-flex justify-content-between p-3 mb-4">
        <div>{transactions.length} transactions found</div>

        <div>
          <Form.Control type="text"></Form.Control>
        </div>
        <div>
          <Button>
            <CgAddR /> Add new Transaction
          </Button>
        </div>
      </div>
      <Table striped hover>
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
                    <td className="out">-${t.amount}</td>
                  </>
                )}
                {t.type === "income" && (
                  <>
                    <td className="in">${t.amount}</td>
                    <td></td>
                  </>
                )}
              </tr>
            ))}

          <tr>
            <td colSpan={4} className="fw-bold text-center">
              Total Balance
            </td>
            <td className={`fw-bold ${total >= 0 ? "in" : "out"}`}>${total}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
