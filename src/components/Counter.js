import React from 'react';

export default (props) => {
    const { onIncrement, onDecrement, value } = props;
    return <div><button onClick={onIncrement}>+</button>{value}<button onClick={onDecrement}>-</button></div>;
};