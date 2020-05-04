import React from "react";

import Header from "../components/Header";
import ListKonsultasi from "../components/ListKonsultasi";
import Title from "../components/Title";

const Konsultasi = () => {
  return (
    <div>
      <Header />
      <hr />
      <div className="sub-rumah">
        <Title text="Consultation" />
        <ListKonsultasi />
      </div>
    </div>
  );
};

export default Konsultasi;
