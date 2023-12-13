//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
    return (
        <div className="main-container">

            <div>
            </div>
            <div className="six">{props.counter6}</div>
            <div className="five">{props.counter5}</div>
            <div className="four">{props.counter4}</div>
            <div className="three">{props.counter3}</div>
            <div className="two">{props.counter2}</div>
            <div className="one">{props.counter1}</div>

        </div>
    );
}

let counter = 0;
setInterval(function () {
    
    const counter6 = Math.floor((counter / 100000) % 10);
    const counter5 = Math.floor((counter / 10000) % 10);
    const counter4 = Math.floor((counter / 1000) % 10);
    const counter3 = Math.floor((counter / 100) % 10);
    const counter2 = Math.floor((counter / 10) % 10);
    const counter1 = Math.floor((counter / 1) % 10);
      
    counter ++
console.log(counter6, counter5, counter4, counter3, counter2, counter1);
}, 100)


//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));


