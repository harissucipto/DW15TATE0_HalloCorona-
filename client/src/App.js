import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as PATHS from "./constants/routes";
import Home from "./pages/Home";
import DetailArtikel from "./pages/DetailArtikel";
import BuatKonsultasi from "./pages/BuatKonsultasi";
import Reservasi from "./pages/Reservasi";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={PATHS.PROFILE} component={Profile} />
        <Route path={PATHS.RESERVATION} component={Reservasi} />
        <Route path={PATHS.CREATE_CONSULTATION} component={BuatKonsultasi} />
        <Route path="/detail-artikel/:id" component={DetailArtikel} />
        <Route path={PATHS.HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
