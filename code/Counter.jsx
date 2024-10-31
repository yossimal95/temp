import React, { useState } from "react";
import "./Counter.css";

const Counter = ({ defaultValue }) => {
    const [counter, setCounter] = useState(defaultValue || 0);

    return (
        <div className="counter-container">
            <div className="counter-board">
                <div className="counter">{counter}</div>
            </div>
            <div className="buttons">
                <div
                    onClick={() => {
                        setCounter(counter + 1);
                    }}
                >
                    <Arrow />
                </div>
                <div
                    onClick={() => {
                        setCounter(counter - 1);
                    }}
                >
                    <Arrow rotete={180} />
                </div>
            </div>
        </div>
    );
};

export default Counter;

const Arrow = ({ color, width, rotete: rotate }) => {
    return (
        <svg style={{ transform: `rotate(${rotate}deg)` }} width={width || "20px"} color={color || "black"} viewBox="0 0 24 24">
            <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
        </svg>
    );
};
