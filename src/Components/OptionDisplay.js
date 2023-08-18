import React from "react";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  let currentPotential = useSelector(selectPotentials);
  console.log(currentPotential);
  const dispatch = useDispatch();
  return (
    <div className="stack">
      {currentPotential.map((country, i) => {
        return (
          <h2
            key={country.name.official}
            className="country-option"
            onClick={() => {
              dispatch(setDisplayCountry(currentPotential[i]));
            }}
          >
            {country.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
