import axios from "axios";

const http = axios.create({
  baseURL: `https://give-me-users-forever.herokuapp.com/api/users`,
  headers: {
    "Content-type": "application/json",
  },
});

const Users = class {
  giveMeUsers = (page: number) => http({ method: "get", url: `/${page}/next` });
};

export default Users;
