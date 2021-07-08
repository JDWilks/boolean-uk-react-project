import { Link } from "react-router-dom";

import "./addYourOwn.css";

function AddYourOwn() {
  function addActivity(activityData) {
    fetch(" http://localhost:3030/activities", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(activityData),
    })
      .then((response) => response.json())
      .then((activity) => {
        alert("great you did it");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newActivityPost = {
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      comment: event.target.comment.value,
      type: event.target.activity.value,
      participants: event.target.numberOfPeople.value,
    };
    addActivity(newActivityPost);

    event.target.reset();
  }

  return (
    <form className="addYourOwnStyling" onSubmit={handleSubmit}>
      <h1>Add Your Own Activity To The Database</h1>
      <label htmlFor="fname">First name:</label>
      <input type="text" id="fname" name="fname" />

      <label htmlFor="lname">Last name:</label>
      <input type="text" id="lname" name="lname" />
      <p>Activity Type</p>
      <textarea rows="4" cols="50" name="comment" id="comment">
        Enter text here...
      </textarea>

      <label htmlFor="type">Choose a activty type:</label>

      <select name="activity" className="typeAddOwn">
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

      <select name="numberOfPeople" className="peopleAddOwn">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input type="submit" value="Submit" />

      <button className="backButton">
        <Link to="/">Back To The Beautiful Home Page</Link>
      </button>
    </form>
  );
}

export default AddYourOwn;
