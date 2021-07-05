import { useState, useEffect } from "react";
import mainBody from "./mainBody.css";

function MainBody() {
  const [randomQuote, setRandomQuote] = useState();

  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then(setRandomQuote);
  }, []);

  if (!randomQuote) return <h1>Not Ready - Wait Init....</h1>;
  console.log("random quote", randomQuote);

  return (
    <body className="mainBodyStyling">
      <section className="buttonsForSearch">
        <button
          onClick={() => {
            setRandomQuote(randomQuote);
            console.log("click");
          }}
        >
          Random
        </button>
        <button>this is copy</button>
        <button>type</button>
        <button>people</button>
        <button>search</button>
      </section>
      <section className="quoteStyling">
        <h1 className="activityStyle">
          <span className="spanMainQuote">➡ Activity: </span>
          {randomQuote.activity}
        </h1>
        <h2 className="typeStyle">
          <span className="spanMainQuote">➡ Type: </span>
          {randomQuote.type}
        </h2>
        <h3 className="participantsStyle">
          <span className="spanMainQuote">➡ Participants: </span>
          {randomQuote.participants}
        </h3>
      </section>
      <section className="addFavSection">
        <button>Add</button>
        <button>Favorite</button>
      </section>
    </body>
  );
}
export default MainBody;

/// was in body

// {
//   "activity": "Draw something interesting",
//   "type": "recreational",
//   "participants": 1,
//   "price": 0,
//   "link": "",
//   "key": "8033599",
//   "accessibility": 0
//   }

// onClick={() => {
//   setRandomQuote();
//   console.log("click");
// }}
