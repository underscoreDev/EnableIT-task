// cc:application base#;application index
import React from "react";
import Providers from "app/Providers";
import { MainRoutes } from "app/Routes";
import { AppBar } from "app/components/appbar";

export const App = (props: any) => (
  <Providers>
    <AppBar {...props} />
    <MainRoutes />
  </Providers>
);
