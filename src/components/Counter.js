import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    const { onIncrement, onDecrement, value } = props;
    return <div><button onClick={onIncrement}>+</button>{value}<button onClick={onDecrement}>-</button></div>;
};

const mapStateToProps = state => ({
    value: state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
