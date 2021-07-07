function AddYourOwn() {
  return (
    <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" />
      <textarea rows="4" cols="50" name="comment" form="usrform">
        Enter text here...
      </textarea>
      <input type="submit" value="Submit" />

      <input type="radio" id="cooking" name="type" value="cooking" />
      <label for="cooking">cooking</label>
      <input type="radio" id="relaxation" name="type" value="relaxation" />
      <label for="relaxation">relaxation</label>

      <input type="radio" id="recreational" name="type" value="recreational" />
      <label for="recreational">recreational</label>

      <input type="radio" id="busywork" name="type" value="busywork" />
      <label for="busywork">busywork</label>

      <input type="radio" id="education" name="type" value="education" />
      <label for="education">education</label>

      <input type="radio" id="social" name="type" value="social" />
      <label for="social">social</label>

      <input type="radio" id="charity" name="type" value="charity" />
      <label for="charity">charity</label>

      <input type="radio" id="music" name="type" value="music" />
      <label for="music">music</label>

      <input type="radio" id="diy" name="type" value="diy" />
      <label for="diy">diy</label>
    </form>
  );
}

export default AddYourOwn;
