import React from "react";
import {useSelector, useDispatch} from "react-redux";
import BandInput from "./BandInput";
import {bandAdded} from "./bandsSlice";

function BandsContainer() {

  const bands = useSelector((state) => state.bands.entities);
  const dispatch = useDispatch();

  function onBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  return <div>
    <BandInput onBandSubmit={onBandSubmit} />
    <ul>
      {bands.map((band, i) => {
        return <li key={i}>{band}</li>
      })}
    </ul>
  </div>;
}

export default BandsContainer;
