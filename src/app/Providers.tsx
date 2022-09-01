// cc:application base#;application providers
import "app/sass/main.scss";
import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

interface ProviderProps {
  children?: ReactNode;
}

const queryClient = new QueryClient();

const Providers = (props: ProviderProps) => (
  <QueryClientProvider client={queryClient}>
    <Router>{props.children}</Router>
  </QueryClientProvider>
);

export default Providers;
