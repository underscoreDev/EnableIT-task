import Users from "app/utils/api";
import { useQuery } from "react-query";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

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
                prev
              </button>
              <button onClick={() => setPage(page + 1)}>next</button>
              {data?.data.users.map((user: any) => (
                <div key={user.ID}>
                  {/* <h1>{user.JobTitle}</h1>
                  <h1>{user.Phone}</h1>
                <h1>{user.Company}</h1> */}
                  {/* <h1>{user.Email}</h1> */}
                  <h1>{user.FirstNameLastName}</h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
