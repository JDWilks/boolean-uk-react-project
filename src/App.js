import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Favourites from "./Components/Pages/Favourites";
import AddYourOwn from "./Components/Pages/AddYourOwn";
import React from "react";

function App() {
  return (
    <div className="App">
      <section className="mainStylingAll">
        <Header />
        <MainBody />

        <Switch>
          <Route path="/favourites" exact>
            <Favourites />
          </Route>
          <Route path="/addyourown" exact>
            <AddYourOwn />
          </Route>
        </Switch>

        <Footer />
      </section>
    </div>
  );
}

export default App;
