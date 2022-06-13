import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import all from "./index.scss";
import NavBar from "./components/nav";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <NavBar></NavBar>
    </div>
);