import React from "react";

// City
// State
// LocationText
//EstimatedPopulation
// TotalWages

function City(props) {
  return (
    <div>
      <div>
        <h1>{props.cityName}</h1>
        <ul>
          <li>{props.state}</li>
          <li>{props.location}</li>
          <li>{props.population}</li>
          <li>{props.totalWages}</li>
        </ul>
      </div>
    </div>
  );
}

export default City;
