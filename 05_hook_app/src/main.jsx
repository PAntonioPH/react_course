import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {MultipleCustomHooks} from "./03_examples/MultipleCustomHooks.jsx";
// import {SimpleForm} from "./02_useEffect/SimpleForm.jsx";
// import {SimpleFormCustomHook} from "./02_useEffect/SimpleFormCustomHook.jsx";
// import {HooksApp} from "./HooksApp.jsx";
// import {CounterApp} from "./01_useState/CounterApp.jsx";
// import {CounterAppCustomHook} from "./01_useState/CounterAppCustomHook.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MultipleCustomHooks/>
  // </React.StrictMode>,
)
