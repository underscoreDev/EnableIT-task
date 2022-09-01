import React from "react";
import { UserTableProps } from "app/interface/UserTable";

const randomColors = [
  "#00BFD9",
  "#FFB834",
  "#d90057",
  "#9B51E0",
  "#F2C94C",
  " #27AE60",
  "#000000",
  "#2F80ED",
  "#b5d900",
  "#ce00d9",
];

export interface TableProps {
  users: UserTableProps[];
}

const TableBody = ({ users }: TableProps) => {
  return (
    <>
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
    </>
  );
};

export default TableBody;
