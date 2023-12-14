//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'




// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
    return (
        <div className="center-container">
            <div className="main-container">
                <div id="clock">
                <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="six">{props.numCounter6}</div>
                <div className="five">{props.numCounter5}</div>
                <div className="four">{props.numCounter4}</div>
                <div className="three">{props.numCounter3}</div>
                <div className="two">{props.numCounter2}</div>
                <div className="one">{props.numCounter1}</div>
            </div>
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

    counter++

    //render your react application

    ReactDOM.render(<SimpleCounter numCounter1={counter1} numCounter2={counter2} numCounter3={counter3} numCounter4={counter4} numCounter5={counter5} numCounter6={counter6}
    />, document.querySelector("#app"));

}, 1000)


