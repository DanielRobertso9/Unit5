import React from "react";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { useSelector } from "react-redux";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>

      <table className="overview-table">
        <tr>
          <td>Borders: </td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e}, `;
                  }
                })
              : "None"}
          </td>
        </tr>
        <tr>
          <td>Capital: </td>
          <td>{currentDisplay.capital}</td>
        </tr>
        <tr>
          <td>Region: </td>
          <td>{currentDisplay.region}</td>
        </tr>
        <tr>
          <td>Subregion: </td>
          <td>{currentDisplay.subregion}</td>
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Continents: </td>
          <td>{currentDisplay.continents}</td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
