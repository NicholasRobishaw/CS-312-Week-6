// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import data from "./practice.js";

const [honda, tesla] = data;

console.log(tesla);

const {
  model: teslaModel,
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColor],
} = tesla;

const {
  model: hondaModel,
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColor],
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{teslaModel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColor}</td>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColor}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
