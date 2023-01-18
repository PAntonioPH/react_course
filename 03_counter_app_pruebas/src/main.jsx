import React from "react";
import ReactDOM from 'react-dom/client'
import {HelloWorldApp} from "./HelloWorldApp.jsx";
import {FirstApp} from "./FirstApp.jsx";

import "./style.css"
import {CounterApp} from "./CounterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<HelloWorldApp/>*/}
    <FirstApp title={"Hola mundo"} subTitle={"Subtitulo"}/>
    <CounterApp value={100}/>
  </React.StrictMode>
)