import React from "react";
import { render } from "react-dom";
import DateRange from "./DateRange";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <DateRange startDateName="start1" endDateName="end1" />
  </div>
);

render(<App />, document.querySelector(".root"));
