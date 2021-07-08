import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./favourites.css";

function Favourites({ favouriteQuote, setFavouriteQuote }) {
  const [favOnPage, setFavOnPage] = useState([]);

  function getfavFromServer() {
    return fetch("http://localhost:3030/favourites").then((response) =>
      response.json().then()
    );
  }

  useEffect(() => {
    getfavFromServer().then(setFavOnPage);
  }, []);

  return (
    <body className="backButtonFavPage">
      <div className="quoteOnPageFavPage">
        <div>
          <h1 className="activityStyleFavPage">
            {favOnPage.map((fav) => (
              <p> {fav.activity} </p>
            ))}
          </h1>
        </div>
      </div>
      <Link to="/">Back To The Beautiful Home Page</Link>
    </body>
  );
}

export default Favourites;

// "favourites": [
//   {
//     "activity": "Learn and play a new card game",
//     "type": "recreational",
//     "participants": 1,
//     "price": 0,
//     "link": "https://www.pagat.com",
//     "key": "9660022",
//     "accessibility": 0,
//     "id": 1
//   }
// ],
