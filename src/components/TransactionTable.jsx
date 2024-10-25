import React from "react";
import { Table } from "react-bootstrap";

export const TransactionTable = () => {
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
        <tr>
          <td>1</td>
          <td>25/10/2024</td>

          <td>Salary</td>
          <td>$1000</td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>22/10/2024</td>
          <td>Shopping</td>
          <td></td>
          <td>$-630</td>
        </tr>
        <tr>
          <td colSpan={4} className="fw-bold text-center">
            Total Balance
          </td>
          <td className="fw-bold">$470</td>
        </tr>
      </tbody>
    </Table>
  );
};
