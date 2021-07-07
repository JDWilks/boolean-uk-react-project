import { useState, useEffect } from "react";
import "./mainBody.css";
import { Link } from "react-router-dom";

function MainBody() {
  const [randomQuote, setRandomQuote] = useState();
  const [activtyType, setActivityType] = useState();
  const [activityNuPeople, setActivityNuPeople] = useState(1);
  const [favouriteQuote, setFavouriteQuote] = useState();

  function randomiseQuotes() {
    return fetch("http://www.boredapi.com/api/activity/").then((response) =>
      response.json()
    );
  }

  useEffect(() => {
    randomiseQuotes().then(setRandomQuote);
  }, []);

  function searchResultsQuotes() {
    const url = `http://www.boredapi.com/api/activity?type=${activtyType}&participants=${activityNuPeople}`;
    console.log("url", url);
    return fetch(
      `http://www.boredapi.com/api/activity?type=${activtyType}&participants=${activityNuPeople}`
    ).then((response) => response.json());
  }

  useEffect(() => {
    searchResultsQuotes()
      .then(setRandomQuote)
      .catch((error) => console.log(error));
  }, []);

  if (!randomQuote) return <h1>Hold your horses....</h1>;

  function handleChange(event) {
    if (event.target.name === "type") setActivityType(event.target.value);
    else setActivityNuPeople(event.target.value);
  }

  return (
    <body className="mainBodyStyling">
      <section className="buttonsForSearch">
        <button
          className="randomButton"
          onClick={() => {
            randomiseQuotes().then(setRandomQuote);
          }}
        >
          Click For Random Activity
        </button>

        {/* <div className="searchCopy">
          <p> Or Search Here</p>
        </div> */}

        <label htmlFor="type">Choose a activty type:</label>

        <select name="type" className="type" onChange={handleChange}>
          <option value="cooking">Cooking</option>
          <option value="relaxation">Relaxation</option>
          <option value="recreational">Recreational</option>
          <option value="busywork">Busywork</option>
          <option value="education">Education</option>
          <option value="social">Social</option>
          <option value="charity">Charity</option>
          <option value="music">Music</option>
          <option value="diy">DIY</option>
        </select>

        <label htmlFor="people">Choose how many people:</label>

        <select name="people" className="people" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button
          className="search"
          onClick={() => {
            searchResultsQuotes().then(setRandomQuote);
          }}
        >
          search
        </button>
      </section>
      <section className="quoteStyling">
        <div className="quoteOnPage">
          <h1 className="activityStyle">
            <span className="spanMainQuote">➡ Activity: </span>
            {randomQuote.activity}
          </h1>
          <h2 className="typeStyle">
            <span className="spanMainQuote">➡ Type: </span>
            {randomQuote.type}
          </h2>
          <h3 className="participantsStyle">
            {" "}
            <span className="spanMainQuote">➡ Participants: </span>
            {randomQuote.participants}
          </h3>
        </div>
        <div className="favBttnDiv">
          <button
            className="addFavouritesButton"
            onClick={() => {
              setFavouriteQuote(randomQuote);
            }}
          >
            {" "}
            Add this wonderful activity to your favourites
          </button>

          <div className="imageDiv">
            <img
              src="./icons/undraw_lightbulb_moment_re_ulyo.svg"
              alt="lightbulb"
            />
          </div>
        </div>
      </section>
      <section className="addFavSection">
        <div className="addYourOwnButton">
          <Link to={/addyourown/}>Add Your Own Activity</Link>
        </div>

        <div className="viewFavouitesButton">
          <Link to={/favourites/}>View My Favorites</Link>
        </div>
      </section>
    </body>
  );
}
export default MainBody;
