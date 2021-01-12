import React from "react";
import reactDOM from "react-dom";
import "./App.css";
import City from "./components/City";

function App() {
  const getResults = async (zip) => {
    try {
      let response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`);
      console.log("response", response);
      if (!response.ok) {
        throw new Error("Invalid zipcode");
      }
      let data = await response.json();
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
    }
  };
  // NOTE FOR SELF: since getResults is asynchronous, this function must be too, otherwise it will return before
  // getResults has finished (why async and await must be used here)
  const displayResults = async () => {
    const zip = document.querySelector("#zip-input").value;

    const data = await getResults(zip);
    //console.log("result", data[0]);
    if (!data) {
      alert("Invalid zipcode");
      return;
    }

    const resultDiv = document.querySelector("#results");

    let results = [];

    for (const dataSet of data) {
      results.push(
        <City
          cityName={dataSet.City}
          state={dataSet.State}
          location={dataSet.LocationText}
          population={dataSet.EstimatedPopulation}
          totalWages={dataSet.TotalWages}
        ></City>
      );
    }

    reactDOM.render(results, resultDiv);
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>ZIP search</h1>
      </div>
      <div className="app-body">
        <div className="submit-area">
          <label for="zip-input">Zip Code </label>
          <input type="text" id="zip-input" name="zip-input"></input>
        </div>
        <button onClick={displayResults}>Search</button>
        <div id="results"></div>
      </div>
    </div>
  );
}

export default App;
