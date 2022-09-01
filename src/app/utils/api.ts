import axios, { AxiosResponse, AxiosError, AxiosPromise } from "axios";

const http = axios.create({
  baseURL: `http://give-me-users-forever.herokuapp.com/api/users`,
  headers: {
    "Content-type": "application/json",
  },
});

const Users = class {
  giveMeUsers = (page: number) => http({ method: "get", url: `/${page}/next` });
};

export default Users;
