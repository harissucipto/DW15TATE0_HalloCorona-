import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";

import { getArticles, loadArticles } from "../store/articles";
import ItemArtikel from "./ItemArtikel";
import Loading from "./Loading";
import { format } from "date-fns";

const stringDateQuery = (date) => format(date, "MM-dd-yyyy");

const ListArtikelHariIni = () => {
  const { list, loading, message } = useSelector(getArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArticles(`createdAt=${stringDateQuery(new Date())}`));
  }, [dispatch]);

  if (loading) return <Loading />;

  if (message) return <h3>{message}</h3>;

  return (
    <Grid container>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <h1>Artikel Hari Ini</h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
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
