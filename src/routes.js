import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import QuizPerfum from "./pages/QuizPerfum";
import Ranking from "./pages/Ranking";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Routes() {
  return (
    <main className="main__root">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/perfum/quiz/:id" component={QuizPerfum} />
          <Route exact path="/ranking" component={Ranking} />

          <Route path="*" component={QuizPerfum} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </main>
  );
}
