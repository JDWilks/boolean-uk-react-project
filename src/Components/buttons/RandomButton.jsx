import { randomiseQuotes } from "../Functions&UseEffect/APIFunctions";

function RandomButton({ setRandomQuote }) {
  return (
    <button
      className="randomButton"
      onClick={() => {
        randomiseQuotes().then(setRandomQuote);
      }}
    >
      Click For Random Activity
    </button>
  );
}

export default RandomButton;
