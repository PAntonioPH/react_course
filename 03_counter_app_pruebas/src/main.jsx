import React from "react";
import ReactDOM from 'react-dom/client'
import "./style.css"
import {HelloWorldApp} from "./HelloWorldApp.jsx";
import {CounterApp} from "./CounterApp.jsx";
import {FirstApp} from "./FirstApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirstApp title={"Hola mundo"} subTitle={"Subtitulo"}/>
    {/*<CounterApp value={100}/>*/}
  </React.StrictMode>
)