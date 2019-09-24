import React from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const ManageCustomers = () => {
  return (
    <div>
      <h1>Manage Customers</h1>
      <Table>
        <TableBody>
          {["1", "2", "abc", "123", "345bcd"].map(c => (
            <TableRow key={c}>
              <TableCell>
                <Link to={`/billing/customers/manage/${c}`}>Customer {c}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageCustomers;
