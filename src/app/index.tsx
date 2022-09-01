// cc:application base#;application index
import React from "react";
import Providers from "app/Providers";
import { MainRoutes } from "app/Routes";

export const App = (props: any) => (
  <Providers>
    <MainRoutes />
  </Providers>
);
