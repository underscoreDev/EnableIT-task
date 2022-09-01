import Users from "app/utils/api";
import { useQuery } from "react-query";
import React, { useState } from "react";
import { UserTableProps } from "app/interface/UserTable";
import Table from "app/pages/landing-page/components/table";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const users = new Users();

export const LandingLayout = () => {
  const [page, setPage] = useState<number>(0);

  const { isLoading, data, error, isError, isFetching } = useQuery(["users", page], () => users.giveMeUsers(page));

  return (
    <React.Fragment>
      <div className="landing">
        <div className="table">
          {isLoading || isFetching ? (
            <CircularProgress sx={{ color: "#ffdaa1" }} />
          ) : isError ? (
            <h4>Cant get Users {JSON.stringify(error)} </h4>
          ) : (
            <div>
              <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                <ArrowBackIosNewIcon />
                prev
              </button>

              <button onClick={() => setPage(page + 1)}>
                <ArrowForwardIosIcon />
                next
              </button>

              <Table {...data?.data.users} />
              {data?.data.users.slice(0, 10).map((user: UserTableProps) => (
                <div key={user.ID}></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
