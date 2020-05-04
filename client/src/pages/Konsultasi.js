import React from "react";

import Header from "../components/Header";
import ListKonsultasi from "../components/ListKonsultasi";

const Konsultasi = () => {
  return (
    <div>
      <Header />
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h1>Consultation</h1>
        <ListKonsultasi />
      </div>
    </div>
  );
};

export default Konsultasi;
