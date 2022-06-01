import React, { useEffect } from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {
  return (
    <>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <img className="logo" alt="logo" src={"https://raw.githubusercontent.com/open-rpc/design/master/icons/open-rpc-logo-noText/open-rpc-logo-noText%20(PNG)/256x256.png"} style={{ paddingTop: "10%" }} />
        <br/>
        <Typography variant="h1">Query & Transact Advanced Query APIs (preview)</Typography>
        <Typography gutterBottom style={{ paddingTop: "100px", paddingBottom: "20px" }} variant="inherit">
          This document describes the preview APIs for Query and Transact's new Advanced Query APIs. See the [main Query and Transact documentation](https://docs.cloud.coinbase.com/blockchain-infrastructure/docs) for more information about Query and Transact. 
        </Typography>
        <br/>
        <Button variant="contained" color="primary" href="/api-documentation">
          API Reference Documentation
        </Button>
        <br />
        <br />
        <br />
      </Grid>
    </>
  );
};

export default MyApp;
