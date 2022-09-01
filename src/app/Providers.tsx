// cc:application base#;application providers
import Box from "@mui/material/Box";
import React, { ReactNode } from "react";
import { GlobalStyles } from "app/theme/globalStyles";
import { BrowserRouter as Router } from "react-router-dom";

interface ProviderProps {
  children?: ReactNode;
}

const Providers = (props: ProviderProps) => (
  <Box>
    <GlobalStyles />
    <Router>{props.children}</Router>
  </Box>
);

export default Providers;
