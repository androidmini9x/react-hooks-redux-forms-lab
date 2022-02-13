import React, {useState} from "react";
import { useDispatch } from "react-redux";

function BandInput({onBandSubmit}) {

  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onBandSubmit(name);
    setName("");
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input type="text" id="name" onChange={handleChange} value={name} />
      <input type="submit" value="add band"/>
    </form>
  </div>;
}

export default BandInput;
