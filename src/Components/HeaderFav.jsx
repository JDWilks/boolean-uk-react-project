import "./header.css";
import { Link } from "react-router-dom";

function HeaderFav() {
  return (
    <header className="topHeader">
      <h1>Check out your favourite activites below...</h1>
      <Link to="/">Back To The Beautiful Home Page</Link>
    </header>
  );
}

export default HeaderFav;
