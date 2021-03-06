import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { checkIsDoctor } from "../store/auth";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ListArtikelHariIni from "../components/ListArtikelHariIni";
import { RESERVATION } from "../constants/routes";
import Title from "../components/Title";

function Home() {
  const isDoctor = useSelector(checkIsDoctor);
  if (isDoctor) return <Redirect to={RESERVATION} />;

  return (
    <div>
      <Header />
      <hr />
      <Banner />
      <div className="rumah">
        <Title text={"Artikel Hari ini"} style={{ textAlign: "center" }} />
        <ListArtikelHariIni />
      </div>
    </div>
  );
}

export default Home;
