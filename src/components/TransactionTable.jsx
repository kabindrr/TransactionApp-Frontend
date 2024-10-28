import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import { CgAddR } from "react-icons/cg";

export const TransactionTable = () => {
  const [displayTransactions, setDisplayTransactions] = useState([]);
  const { transactions } = useUser();

  useEffect(() => {
    setDisplayTransactions(transactions);
  }, [transactions]);
  console.log(transactions);
  const total = displayTransactions.reduce((acc, item) => {
    return item.type === "income" ? acc + item.amount : acc - item.amount;
  }, 0);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    const filteredArg = transactions.filter(({ title }) => {
      return title.toLowerCase().includes(value);
    });

    setDisplayTransactions(filteredArg);
  };

  return (
    <>
      <div className="d-flex justify-content-between p-3 mb-4">
        <div>{displayTransactions.length} transactions found</div>

        <div>
          <Form.Control type="text" onChange={handleOnSearch}></Form.Control>
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
          {displayTransactions.length > 0 &&
            displayTransactions.map((t, i) => (
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
