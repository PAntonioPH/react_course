import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import {MultipleCustomHooks} from "./03_examples/MultipleCustomHooks.jsx";
// import {FocusScreen} from "./04_useReft/FocusScreen.jsx";
// import {Layout} from "./05_useLayoutEffect/Layout.jsx";
// import {Memorize} from "./06_memos/Memorize.jsx";
// import {MemoHook} from "./06_memos/MemoHook.jsx";
// import {CallbackHook} from "./06_memos/CallbackHook.jsx";
// import {Padre} from "./07_tarea_memo/Padre.jsx";
// import {SimpleForm} from "./02_useEffect/SimpleForm.jsx";
// import {SimpleFormCustomHook} from "./02_useEffect/SimpleFormCustomHook.jsx";
// import {HooksApp} from "./HooksApp.jsx";
// import {CounterApp} from "./01_useState/CounterApp.jsx";
// import {CounterAppCustomHook} from "./01_useState/CounterAppCustomHook.jsx";
// import "./08_useReducer/intro_reducer"
// import {ToDoApp} from "./08_useReducer/ToDoApp.jsx";
import {MainApp} from "./09_useContext/MainApp.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/*<React.StrictMode>*/}
    <MainApp/>
    {/*</React.StrictMode>,*/}
  </BrowserRouter>
)
