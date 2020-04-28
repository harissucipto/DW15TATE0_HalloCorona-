import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";

import Virus from "../images/virus.png";
import Konsultasi from "./Konsultasi";

const listUrlCara = ["c1.png", "c2.png", "c3.png", "c4.png"];

const styles = (theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    color: pink[50],
  },
  listCara: {
    height: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Banner = withStyles(styles)(({ classes }) => {
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={5}>
        <Grid container>
          <Grid item>
            <img src={Virus} alt="virus" />
          </Grid>
          <Grid item className={classes.title}>
            <h1>Cegah Covid-19 </h1>
            <h2>dengan Melakukan: </h2>
          </Grid>
        </Grid>
        <Konsultasi />
      </Grid>

      <Grid item xs={12} md={7}>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.listCara}
        >
          {listUrlCara.map((item, index) => (
            <Grid item key={index}>
              <img src={require(`../images/${item}`)} alt="igm" />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
});

export default Banner;
