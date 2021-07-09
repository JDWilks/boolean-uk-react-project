import { useEffect } from "react";
import "./mainBody.css";
import { Link } from "react-router-dom";
import heart from "./icons/heart.png";
import undraw_lightbulb_moment_re_ulyo from "./icons/undraw_lightbulb_moment_re_ulyo.svg";

function MainBody({
  randomQuote,
  setRandomQuote,
  activtyType,
  setActivityType,
  activityNuPeople,
  setActivityNuPeople,
}) {
  function randomiseQuotes() {
    return fetch("http://www.boredapi.com/api/activity/").then((response) =>
      response.json()
    );
  }

  useEffect(() => {
    randomiseQuotes().then(setRandomQuote);
    console.log;
  }, []);

  function searchResultsQuotes() {
    return fetch(
      `http://www.boredapi.com/api/activity?type=${activtyType}&participants=${activityNuPeople}`
    ).then((response) => response.json());
  }

  // if (!randomQuote) return <h1>Hold your horses....</h1>;

  function handleChange(event) {
    if (event.target.name === "type") {
      setActivityType(event.target.value);
    } else {
      setActivityNuPeople(event.target.value);
    }
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

        <label className="labelStyling" htmlFor="type">
          Choose a activty type:
        </label>

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

        <label className="labelStyling" htmlFor="people">
          Choose how many people:
        </label>

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
            searchResultsQuotes().then((quote) => {
              console.log("this is the quote", quote);
              if (!quote.error) {
                setRandomQuote(quote);
              } else {
                fetch(
                  `http://localhost:3030/activities?type=${activtyType}&participants=${activityNuPeople}`
                ).then((response) =>
                  response.json().then((matches) => {
                    setRandomQuote(matches[0]);
                  })
                );
              }
            });
          }}
        >
          search
        </button>
      </section>
      {randomQuote !== undefined ? (
        <section className="quoteStyling">
          <div className="quoteOnPage">
            <div className="quoteStying">
              <h1 className="activityStyle">
                <span className="spanMainQuote">
                  Activity:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                {randomQuote.activity}
              </h1>
              <h2 className="typeStyle">
                <span className="spanMainQuote">
                  Type:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                {randomQuote.type}
              </h2>
              <h3 className="participantsStyle">
                <span className="spanMainQuote">
                  Participants:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                {randomQuote.participants}
              </h3>
            </div>
            <div className="favBttnDiv">
              <button
                className="addFavouritesButton"
                onClick={() => {
                  fetch("http://localhost:3030/favourites", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(randomQuote),
                  });
                }}
              >
                <span>
                  {" "}
                  <img className="hearticon" src={heart} alt="heart" />
                </span>
              </button>
            </div>
          </div>
          <div className="imageDiv">
            <img
              className="lightBulbIcon"
              src="https://www.animatedimages.org/data/media/1543/animated-snoopy-image-0030.gif"
              alt="lightbulb or something image for here"
            />
          </div>
        </section>
      ) : (
        <h1>No quote found please try again</h1>
      )}

      <section className="addFavSection">
        <div className="addYourOwnButton">
          <Link className="addYourOwnText" to="/addyourown">
            Add Your Own Activity
          </Link>
        </div>

        <div className="viewFavouitesButton">
          <Link className="goToFavText" to="/favourites">
            View My Favorites
          </Link>
        </div>
      </section>
    </body>
  );
}

export default MainBody;

//
