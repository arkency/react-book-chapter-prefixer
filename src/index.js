import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";
import Prefixer from "./components/Prefixer";

ReactDOM.render(
  <div>
    <Prefixer />
    <Prefixer initialCountry={"Serbia"} />
    <Prefixer initialCountry={"Narnia"} />
  </div>,
  document.getElementById("root")
);
