function PeopleSelect({ handleChange }) {
  return (
    <>
      {" "}
      <label className="labelStyling" htmlFor="people">
        Choose how many people:
      </label>
      <select name="people" className="people" onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}

export default PeopleSelect;
