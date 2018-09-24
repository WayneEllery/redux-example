import React from 'react';

const Counter = (props) => {
    const { onIncrement, onDecrement, value } = props;
    return <div><button onClick={onIncrement}>+</button>{value}<button onClick={onDecrement}>-</button></div>;
};

export default Counter;
