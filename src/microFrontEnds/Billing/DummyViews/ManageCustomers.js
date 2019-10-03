import React from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const ManageCustomers = () => {
  return (
    <div>
      <Typography variant="h1">Manage Customers</Typography>
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
