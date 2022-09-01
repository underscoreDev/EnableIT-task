import React from "react";
import { UserTableProps } from "app/interface/UserTable";

export interface TableProps {
  users: UserTableProps[];
}

const Table = ({ users }: TableProps) => {
  return (
    <>
      {users.slice(0, 10).map((user: UserTableProps) => (
        <tr className="table__row" key={user.ID}>
          <td className="table__row--body">{user.FirstNameLastName}</td>
          <td className="table__row--body">{user.Company}</td>
          {/* <td className="table__row--body">{user.Email}</td> */}
          <td className="table__row--body">{user.JobTitle}</td>
          <td className="table__row--body">{user.Phone}</td>
        </tr>
      ))}
    </>
  );
};

export default Table;
