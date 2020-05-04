import React from "react";
import Header from "../components/Header";
import ListReservasi from "../components/ListReservasi";
import { checkIsDoctor } from "../store/auth";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { HOME } from "../constants/routes";
import Title from "../components/Title";

const Reservasi = () => {
  const isDoctor = useSelector(checkIsDoctor);

  if (!isDoctor) return <Redirect to={HOME} />;

  return (
    <div>
      <Header />
      <hr />
      <div className="sub-rumah">
        <Title text="Reservasi Data" />
        <ListReservasi />
      </div>
    </div>
  );
};

export default Reservasi;
