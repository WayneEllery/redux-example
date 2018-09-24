import { connect } from 'react-redux';
import Counter from '../components/Counter';

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
