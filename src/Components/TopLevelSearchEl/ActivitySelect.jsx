function ActivitySelect({ handleChange }) {
  return (
    <>
      {" "}
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
    </>
  );
}

export default ActivitySelect;
