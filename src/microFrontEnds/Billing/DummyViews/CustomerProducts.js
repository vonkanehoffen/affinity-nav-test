import React from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const CustomerProducts = ({ match: { params } }) => {
  return (
    <div>
      <Typography variant="h1">Customer Products</Typography>
      <Table>
        <TableBody>
          {["lamp", "chair", "shoes", "pizza"].map(c => (
            <TableRow key={c}>
              <TableCell>
                <Link
                  to={`/billing/customers/manage/${params.customerId}/products/${c}`}
                >
                  Product {c}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomerProducts;
