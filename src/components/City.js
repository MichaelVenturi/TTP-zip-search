import React from "react";

// City
// State
// LocationText
//EstimatedPopulation
// TotalWages

function City(props) {
  return (
    <div>
      <div className="result-header">
        <h2>{props.cityName}</h2>
      </div>
      <div className="result-box">
        <ul>
          <li>State: {props.state}</li>
          <li>Location: {props.location}</li>
          <li>Population: {props.population}</li>
          <li>Total Wages: {props.totalWages}</li>
        </ul>
      </div>
    </div>
  );
}

export default City;
