import Users from "app/utils/api";
import { useQuery } from "react-query";
import React, { useState } from "react";
import TableBody from "app/pages/landing-page/components/table";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const users = new Users();

export const LandingLayout = () => {
  const [page, setPage] = useState<number>(0);

  const { isLoading, data, isError, isFetching } = useQuery(["users", page], () => users.giveMeUsers(page));

  return (
    <React.Fragment>
      <section className="landing">
        <img src="https://enableit.dk/images/logo.png" alt="EnableIT logo" />

        <div className="tableContainer">
          {isError ? (
            <p>Error Can't get Users</p>
          ) : (
            <div className="main">
              <table className="table" aria-label="users table">
                <tr className="table__row">
                  <th className="table__row--header">User Name</th>
                  <th className="table__row--header">Company</th>
                  <th className="table__row--header">Job Title</th>
                  <th className="table__row--header">
                    <PhoneEnabledIcon /> Phone Number
                  </th>
                </tr>

                {isLoading || isFetching ? (
                  <CircularProgress sx={{ color: "#ffdaa1" }} />
                ) : (
                  <TableBody users={data?.data.users} />
                )}
              </table>
            </div>
          )}
        </div>

        <section className="btn">
          <button onClick={() => setPage(page - 1)} disabled={page === 0}>
            <ArrowBackIosNewIcon />
            Prev
          </button>

          <button onClick={() => setPage(page + 1)}>
            Next <ArrowForwardIosIcon />
          </button>
        </section>
      </section>
    </React.Fragment>
  );
};
