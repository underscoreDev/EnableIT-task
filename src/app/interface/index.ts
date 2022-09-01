export interface UserTableProps {
  ID: string;
  JobTitle: string;
  Phone: string;
  Company: string;
  Email: string;
  FirstNameLastName: string;
}

export interface TableProps {
  users: UserTableProps[];
}
