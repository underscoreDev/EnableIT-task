import React from "react";
import Box from "@mui/material/Box";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "app/modules/common/page-loader";

const LandingModule = React.lazy(() => import("app/modules/landing-module"));
const NoMatch = React.lazy(() => import("app/modules/common/no-match-page"));

export const FallbackModule = () => (
  <Box css={"width: 100%;height: calc(100vh - 350px - 144px)"}>
    <PageLoader />
  </Box>
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
            <NoMatch />
          </React.Suspense>
        }
      />
    </Route>
  </Routes>
);
