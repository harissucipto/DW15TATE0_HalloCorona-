import React, { useEffect } from "react";
// import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

import { getArticles, loadArticles } from "../store/articles";
import ItemArtikel from "./ItemArtikel";
import Loading from "./Loading";
import Title from "./Title";

// const stringDateQuery = (date) => format(date, "MM-dd-yyyy");

const ListArtikelHariIni = () => {
  const { list, loading, message } = useSelector(getArticles);
  const dispatch = useDispatch();

  // const query = `createdAt=${stringDateQuery(new Date())}`;

  useEffect(() => {
    dispatch(loadArticles(""));
  }, [dispatch]);

  if (loading) return <Loading />;

  if (message) return <h3>{message}</h3>;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          {list.map((item, index) => (
            <Grid item xs={12} md={4} lg={3} key={index}>
              <ItemArtikel {...item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListArtikelHariIni;
