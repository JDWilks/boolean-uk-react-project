import { useEffect, useState } from "react";
import "./favourites.css";

function Favourites() {
  const [favOnPage, setFavOnPage] = useState([]);

  function getfavFromServer() {
    return fetch("http://localhost:3030/favourites").then((response) =>
      response.json().then()
    );
  }

  useEffect(() => {
    getfavFromServer().then(setFavOnPage);
  }, []);

  function deleteFav(favToDelete) {
    fetch(`http://localhost:3030/favourites/${favToDelete.id}`, {
      method: "DELETE",
    }).then(() => {
      setFavOnPage(favOnPage.filter((fav) => fav.id !== favToDelete.id));
    });
  }

  return (
    <body className="backButtonFavPage">
      <div className="quoteOnPageFavPage">
        <div>
          <h1 className="activityStyleFavPage">
            {favOnPage.map((fav) => (
              <p>
                {" "}
                *&nbsp;&nbsp;&nbsp;&nbsp;{fav.activity}{" "}
                <button
                  className="deleteButton"
                  onClick={() => {
                    console.log("you clicked delete");
                    deleteFav(fav);
                  }}
                >
                  Ⓧ Delete
                </button>
              </p>
            ))}
          </h1>
        </div>
      </div>
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
