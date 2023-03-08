import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrementCounter = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <button data-testid="decrement" onClick={decrementCounter}>-</button>
            <p style={{ margin: 10 }} data-testid="counter">{counter}</p>
            <button data-testid="increment" onClick={incrementCounter} value="+">+</button>
        </div>
    );
};

export default Counter;