import Users from "app/utils/api";
import { useQuery } from "react-query";
import React, { useState } from "react";
import Table from "app/pages/landing-page/components/table";
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
        <div className="tableContainer">
          {isError ? (
            <p>Error Can't get Users</p>
          ) : (
            <div>
              <table className="table" aria-label="users table">
                <tr className="table__row">
                  <th className="table__row--header">User Name</th>
                  <th className="table__row--header">Company</th>
                  {/* <th className="table__row--header">Email</th> */}
                  <th className="table__row--header">Job Title</th>
                  <th className="table__row--header">
                    <PhoneEnabledIcon /> Phone Number
                  </th>
                </tr>

                {isLoading || isFetching ? (
                  <CircularProgress sx={{ color: "#ffdaa1" }} />
                ) : (
                  <Table users={data?.data.users} />
                )}
              </table>

              {/* <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                <ArrowBackIosNewIcon />
                prev
              </button>

              <button onClick={() => setPage(page + 1)}>
                <ArrowForwardIosIcon />
                next
              </button> */}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};
