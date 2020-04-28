import React from "react";
import { Grid, withStyles } from "@material-ui/core";

import Logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import { HOME } from "../constants/routes";
import Auth from "./Auth";

const styles = (theme) => ({
  container: {
    padding: "2rem 5rem",
  },
  logo: {
    cursor: "pointer",
  },
});

const Header = withStyles(styles)(({ classes }) => {
  const history = useHistory();

  const navigate = (path) => () => history.push(path);

  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <img
          src={Logo}
          alt="logo"
          className={classes.logo}
          onClick={navigate(HOME)}
        />
      </Grid>
      <Grid item>
        <Auth />
      </Grid>
    </Grid>
  );
});

export default Header;
