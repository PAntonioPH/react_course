import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {HooksApp} from "./HooksApp.jsx";
import {CounterApp} from "./01_useState/CounterApp.jsx";
import {CounterAppCustomHook} from "./01_useState/CounterAppCustomHook.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<CounterApp/>*/}
    <CounterAppCustomHook/>
  </React.StrictMode>,
)
