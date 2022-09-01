import React from "react";
import { UserTableProps } from "app/interface/UserTable";

export interface TableProps{}

const Table = ({ Company, Email, FirstNameLastName, ID, JobTitle, Phone }[]: UserTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <th>
          <tr>
            <td>Dessert (100g serving)</td>
            <td align="right">Calories</td>
            <td align="right">Fat&nbsp;(g)</td>
            <td align="right">Carbs&nbsp;(g)</td>
            <td align="right">Protein&nbsp;(g)</td>
          </tr>
        </th>

        <TableBody>
          {rows.map((row) => (
            <tr key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <td component="th" scope="row">
                {row.name}
              </td>
              <td align="right">{row.calories}</td>
              <td align="right">{row.fat}</td>
              <td align="right">{row.carbs}</td>
              <td align="right">{row.protein}</td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table;
