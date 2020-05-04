import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as PATHS from "./constants/routes";
import Home from "./pages/Home";
import DetailArtikel from "./pages/DetailArtikel";
import BuatKonsultasi from "./pages/BuatKonsultasi";
import Reservasi from "./pages/Reservasi";
import Profile from "./pages/Profile";
import AddArticle from "./pages/AddArticle";
import Konsultasi from "./pages/Konsultasi";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={PATHS.CONSULTATION} component={Konsultasi} />
        <Route path={PATHS.ADD_ARTICLE} component={AddArticle} />
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
