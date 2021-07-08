import MainBody from "./Components/MainBody";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Favourites from "./Components/Pages/Favourites";
import AddYourOwn from "./Components/Pages/AddYourOwn";
import HeaderFav from "./Components/HeaderFav";
import React from "react";
import { useState } from "react";
import HeaderOwn from "./Components/HeaderOwn";

function App() {
  const [randomQuote, setRandomQuote] = useState();
  const [activtyType, setActivityType] = useState();
  const [activityNuPeople, setActivityNuPeople] = useState(1);
  const [favouriteQuote, setFavouriteQuote] = useState(null);

  return (
    <div className="App">
      <section className="mainStylingAll">
        <Switch>
          <Route path="/" exact>
            <Header />
            <MainBody
              randomQuote={randomQuote}
              setRandomQuote={setRandomQuote}
              setActivityType={setActivityType}
              activtyType={activtyType}
              activityNuPeople={activityNuPeople}
              setActivityNuPeople={setActivityNuPeople}
              favouriteQuote={favouriteQuote}
              setFavouriteQuote={setFavouriteQuote}
            />
          </Route>

          <Route path="/favourites" exact>
            <HeaderFav />
            <Favourites
              favouriteQuote={favouriteQuote}
              setFavouriteQuote={setFavouriteQuote}
            />
          </Route>

          <Route path="/addyourown" exact>
            <HeaderOwn />
            <AddYourOwn />
          </Route>
        </Switch>

        <Footer />
      </section>
    </div>
  );
}

export default App;
