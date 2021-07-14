import { useEffect } from "react";
import "./mainBody.css";
import { Link } from "react-router-dom";
import heart from "./icons/heart.png";
import {
  randomiseQuotes,
  searchResultsQuotes,
} from "./Functions&UseEffect/APIFunctions";

import ActivitySelect from "./TopLevelSearchEl/ActivitySelect";
import RandomButton from "./buttons/RandomButton";
import PeopleSelect from "./TopLevelSearchEl/PeopleSelect";

function MainBody({
  randomQuote,
  setRandomQuote,
  activtyType,
  setActivityType,
  activityNuPeople,
  setActivityNuPeople,
}) {
  useEffect(() => {
    randomiseQuotes().then(setRandomQuote);
    console.log;
  }, []);

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
        <RandomButton setRandomQuote={setRandomQuote} />

        <ActivitySelect handleChange={handleChange} />

        <PeopleSelect handleChange={handleChange} />

        <button
          className="search"
          onClick={() => {
            searchResultsQuotes(activtyType, activityNuPeople).then((quote) => {
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
                  const newFavourite = {
                    activity: randomQuote.activity,
                    type: randomQuote.type,
                    participants: randomQuote.participants,
                  };
                  fetch("http://localhost:3030/favourites", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newFavourite),
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
              alt="snoopy"
            />
          </div>
        </section>
      ) : (
        <section className="quoteStyling">
          <div className="quoteOnPage">
            <div className="quoteStying">
              <h1 className="activityStyle">
                <span className="spanMainQuote">
                  Activity:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                No activity found...
              </h1>
              <h2 className="typeStyle">
                <span className="spanMainQuote">
                  Type:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                ...Please search using different parameters...
              </h2>
              <h3 className="participantsStyle">
                <span className="spanMainQuote">
                  Participants:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                ...Or add your own activity...
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
              src="https://www.animatedimages.org/data/media/1543/animated-snoopy-image-0046.gif"
              alt="lightbulb or something image for here"
            />
          </div>
        </section>
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
