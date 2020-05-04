import React from "react";
import Header from "../components/Header";

import FormReservasi from "../components/FormReservasi";
import Title from "../components/Title";

const BuatKonsultasi = () => {
  return (
    <div>
      <Header />
      <hr />
      <div className="sub-rumah">
        <Title text="Reservasi Consultation" />
        <FormReservasi />
      </div>
    </div>
  );
};

export default BuatKonsultasi;
