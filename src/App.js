import React from "react";
import reactDOM from "react-dom";
import "./App.css";
import City from "./components/City";

function App() {
  function displayResults() {
    getResults();
    const resultDiv = document.querySelector("#results");

    reactDOM.render(<City></City>, resultDiv);
  }

  const getResults = async () => {
    const zip = document.querySelector("#zip-input").value;
    try {
      let response = await fetch(`http://ctp-zip-api.herokuapp.com/zip/${zip}`);
      console.log("response", response);
      if (!response.ok) {
        throw new Error("ERROR");
      }
      let data = await response.json();
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>ZIP search</h1>
      </div>
      <div>
        <label for="zip-input">Zip Code: </label>
        <input type="text" id="zip-input" name="zip-input"></input>
        <button onClick={displayResults}>Search</button>
      </div>
      <div id="results"></div>
    </div>
  );
}

export default App;
