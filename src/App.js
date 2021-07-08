import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Favourites from "./Components/Pages/Favourites";
import AddYourOwn from "./Components/Pages/AddYourOwn";
import React from "react";
import { useState } from "react";

function App() {
  const [randomQuote, setRandomQuote] = useState();
  const [activtyType, setActivityType] = useState();
  const [activityNuPeople, setActivityNuPeople] = useState(1);
  const [favouriteQuote, setFavouriteQuote] = useState();

  return (
    <div className="App">
      <section className="mainStylingAll">
        <Header />

        <Switch>
          <Route path="/" exact>
            <MainBody
              randomQuote={randomQuote}
              setRandomQuote={setRandomQuote}
              setActivityType={setActivityType}
              activtyType={activtyType}
              activityNuPeople={activityNuPeople}
              setActivityNuPeople={setActivityNuPeople}
              setFavouriteQuote={setFavouriteQuote}
            />
          </Route>

          <Route path="/favourites" exact>
            <Favourites
              favouriteQuote={favouriteQuote}
              setFavouriteQuote={setFavouriteQuote}
            />
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
