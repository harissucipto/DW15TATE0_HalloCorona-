import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import { checkIsLogin } from "../store/auth";

import Icon from "../images/icon-1.png";
import { signinOpen } from "../store/signin";
import { useHistory } from "react-router-dom";
import { CREATE_CONSULTATION } from "../constants/routes";

const styles = (theme) => ({
  container: {
    backgroundColor: pink[50],
    borderRadius: "5px",
    color: theme.palette.secondary.light,
    cursor: "pointer",
    maxWidth: "410px",
    minHeight: "85px",
    margin: "0 auto",
    marginBottom: "4rem",
  },
  icon: {},
});

const Konsultasi = withStyles(styles)(({ classes }) => {
  const isLogin = useSelector(checkIsLogin);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
    if (!isLogin) return dispatch(signinOpen);

    history.push(CREATE_CONSULTATION);
  };

  return (
    <Grid
      onClick={handleClick}
      container
      className={classes.container}
      alignContent="center"
      spacing={4}
    >
      <Grid item className={classes.icon}>
        <img src={Icon} alt="icon" />
      </Grid>
      <Grid item>
        <h4>Konsultasi Dengan Dokter</h4>
      </Grid>
    </Grid>
  );
});

export default Konsultasi;
