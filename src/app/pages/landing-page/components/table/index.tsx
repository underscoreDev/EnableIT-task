import React from "react";
import { randomColors } from "app/utils/randomColors";
import { TableProps, UserTableProps } from "app/interface";

const TableBody = ({ users }: TableProps) => {
  return (
    <tbody>
      {users.slice(0, 10).map((user: UserTableProps, idx) => {
        const firstNameInitial = user.FirstNameLastName.split(" ")[0].slice(0, 1);
        const lastNameInitial = user.FirstNameLastName.split(" ")[1].slice(0, 1);

        return (
          <tr className="table__row" key={user.ID}>
            <td className="table__row--body">
              <span className="initials" style={{ background: `${randomColors[idx]}` }}>
                {firstNameInitial}
                {lastNameInitial}
              </span>{" "}
              {user.FirstNameLastName}
            </td>
            <td className="table__row--body">{user.Company}</td>
            <td className="table__row--body">{user.JobTitle}</td>
            <td className="table__row--body">{user.Phone}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
