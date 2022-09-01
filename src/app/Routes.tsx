import React from "react";
import { Route, Routes } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const LandingPage = React.lazy(() => import("app/pages/landing-page"));

export const FallbackPage = () => (
  <div className="loading-spinner">
    <CircularProgress sx={{ color: "#ffdaa1" }} />
  </div>
);

export const MainRoutes = () => (
  <Routes>
    <Route path="/">
      <Route
        index
        element={
          <React.Suspense fallback={<FallbackPage />}>
            <LandingPage />
          </React.Suspense>
        }
      />

      <Route
        path="*"
        element={
          <React.Suspense fallback={<FallbackPage />}>
            <h1>Page not found</h1>
          </React.Suspense>
        }
      />
    </Route>
  </Routes>
);
