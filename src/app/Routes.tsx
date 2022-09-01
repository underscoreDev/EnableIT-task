import React from "react";
import { Route, Routes } from "react-router-dom";
const LandingModule = React.lazy(() => import("app/pages/landing-module"));
import CircularProgress from "@mui/material/CircularProgress";

export const FallbackModule = () => (
  <div style={{ width: "100%", height: "100vw" }}>
    <CircularProgress />
  </div>
);

export const MainRoutes = () => (
  <Routes>
    <Route path="/">
      <Route
        index
        element={
          <React.Suspense fallback={<FallbackModule />}>
            <LandingModule />
          </React.Suspense>
        }
      />

      <Route
        path="*"
        element={
          <React.Suspense fallback={<FallbackModule />}>
            <h1>Page not found</h1>
          </React.Suspense>
        }
      />
    </Route>
  </Routes>
);
