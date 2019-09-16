import React from "react";
import "./style.css";

const buttons = (props) => {

/*

<div>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        <button className="symButton">+</button>
        </div>
*/

    return (
        <div className="container">
        
        <div>
        

        <button className="numButton">AC</button>
        <button className="numButton">+/-</button>
        <button className="numButton">%</button>
        <button className="numButton">/</button>

        <button className="numButton">7</button>
        <button className="numButton">8</button>
        <button className="numButton">9</button>
        <button className="numButton">*</button>

        <button className="numButton">4</button>
        <button className="numButton">5</button>
        <button className="numButton">6</button>
        <button className="numButton">-</button>

        <button className="numButton">1</button>
        <button className="numButton">2</button>
        <button className="numButton">3</button>
        <button className="numButton">+</button>

        <button className="numButton">0</button>
        <button className="numButton">=</button>
        <button className="numButton">=</button>
        <button className="numButton">=</button>
        </div>

        
        
        </div>
    )
}

export default buttons;