import React, { useState } from "react";
import HeaderSection from "./components/header";
import FooterSection from "./components/footer";
import { Box, CircularProgress } from "@mui/material";

export const Layout = (WrappedComponent) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(false);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };
    return (
      <>
        {isLoading && (
          <Box className="loading_container" open={isLoading}>
            <CircularProgress animation="grow" />
          </Box>
        )}
        <Box className="wrapper_container">
          <HeaderSection />
          <WrappedComponent {...props} setLoading={setLoadingState} />
          <FooterSection />
        </Box>
      </>
    );
  }

  return HOC;
};

export default Layout;
