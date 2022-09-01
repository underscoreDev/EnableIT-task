import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  oppsCss,
  fourOfourCss,
  notFoundText,
  backToHomeCss,
  backToHomeText,
  noMatchContainerCss,
} from "app/modules/common/no-match-page/style";

const NoMatchPage = () => (
  <Box css={noMatchContainerCss}>
    <h1 css={oppsCss}>Oops! Page not found</h1>
    <h2 css={fourOfourCss}>404</h2>
    <h3 css={notFoundText}>
      We are sorry, but the page you requested was not found
    </h3>
    <Link to="/">
      <Box css={backToHomeCss}>
        <p css={backToHomeText}>Back to Home Page</p>
      </Box>
    </Link>
  </Box>
);

export default NoMatchPage;
