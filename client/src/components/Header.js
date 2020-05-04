import React from "react";
import { Grid, withStyles } from "@material-ui/core";

import Logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import { HOME } from "../constants/routes";
import Auth from "./Auth";

const styles = (theme) => ({
  logo: {
    cursor: "pointer",
  },
});

const Header = withStyles(styles)(({ classes }) => {
  const history = useHistory();

  const navigate = (path) => () => history.push(path);

  return (
    <div className="rumah">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <div className="logo-rumah">
            <img src={Logo} alt="logo" onClick={navigate(HOME)} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Auth />
        </Grid>
      </Grid>
    </div>
  );
});

export default Header;
