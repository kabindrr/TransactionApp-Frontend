import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import { CgAddR } from "react-icons/cg";
import { deleteTransactions } from "../helpers/transactionAxios";
import { toast } from "react-toastify";

export const TransactionTable = () => {
  const [displayTransactions, setDisplayTransactions] = useState([]);
  const { transactions, toggleModal, getTransactions } = useUser();
  const [idsToDelete, setIdsToDelete] = useState([]);

  useEffect(() => {
    setDisplayTransactions(transactions);
    console.log(transactions);
  }, [transactions]);
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

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    if (value === "all") {
      if (checked) {
        const allIds = displayTransactions.map((item) => item._id);
        setIdsToDelete(allIds);
      } else {
        setIdsToDelete([]);
      }
      return;
    }
    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      const temArg = idsToDelete.filter((id) => id !== value);
      setIdsToDelete(temArg);
    }
    return;
  };

  const handleOnDelete = async () => {
    if (
      confirm(
        `Are you sure you want to delete ${idsToDelete.length} transactions`
      )
    ) {
      const { status, message } = await deleteTransactions(idsToDelete);

      toast[status](message);
      status === "success" && getTransactions() && setIdsToDelete([]);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between p-3 mb-4">
        <div>{displayTransactions.length} transactions found</div>

        <div>
          <Form.Control type="text" onChange={handleOnSearch}></Form.Control>
        </div>
        <div>
          <Button onClick={() => toggleModal(true)}>
            <CgAddR /> Add new Transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check
          label="Select All"
          value="all"
          onChange={handleOnSelect}
          checked={displayTransactions.length === idsToDelete.length}
        />
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
                <td>
                  <Form.Check
                    label={t.createdAt.slice(0, 10)}
                    value={t._id}
                    onChange={handleOnSelect}
                    checked={idsToDelete.includes(t._id)}
                  />
                </td>

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
      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete {idsToDelete.length} Transactions{" "}
          </Button>
        </div>
      )}
    </>
  );
};
