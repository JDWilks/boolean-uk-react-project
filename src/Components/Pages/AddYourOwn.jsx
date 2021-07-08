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
      <label htmlFor="fname">First name:</label>
      <input type="text" id="fname" name="fname" />

      <label htmlFor="lname">Last name:</label>
      <input type="text" id="lname" name="lname" />

      <textarea rows="4" cols="50" name="comment" id="comment">
        Enter text here...
      </textarea>

      {/* // activites // */}
      <p>Activity Type</p>
      <input type="radio" id="cooking" name="activity" value="cooking" />
      <label htmlFor="cooking">cooking</label>

      <input type="radio" id="relaxation" name="activity" value="relaxation" />
      <label htmlFor="relaxation">relaxation</label>

      <input
        type="radio"
        id="recreational"
        name="activity"
        value="recreational"
      />
      <label htmlFor="recreational">recreational</label>

      <input type="radio" id="busywork" name="activity" value="busywork" />
      <label htmlFor="busywork">busywork</label>

      <input type="radio" id="education" name="activity" value="education" />
      <label htmlFor="education">education</label>

      <input type="radio" id="social" name="activity" value="social" />
      <label htmlFor="social">social</label>

      <input type="radio" id="charity" name="activity" value="charity" />
      <label htmlFor="charity">charity</label>

      <input type="radio" id="music" name="activity" value="music" />
      <label htmlFor="music">music</label>

      <input type="radio" id="diy" name="activity" value="diy" />
      <label htmlFor="diy">diy</label>

      {/* // participants */}
      <p>Add Number of Particpants</p>
      <input type="radio" id="participants1" name="numberOfPeople" value="1" />
      <label htmlFor="participants1">1</label>

      <input type="radio" id="participants2" name="numberOfPeople" value="2" />
      <label htmlFor="participants2">2</label>

      <input type="radio" id="participants3" name="numberOfPeople" value="3" />
      <label htmlFor="participants3">3</label>

      <input type="radio" id="participants4" name="numberOfPeople" value="4" />
      <label htmlFor="participants4">4</label>

      <input type="radio" id="participants5" name="numberOfPeople" value="5" />
      <label htmlFor="participants5">5</label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddYourOwn;
