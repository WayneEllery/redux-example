import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    const { state, dispatch } = this.props;
    return (
      <div className="App">
        <Counter value={state.counter} onIncrement={() => { dispatch({ type: 'INCREMENT' }) }} onDecrement={() => { dispatch({ type: 'DECREMENT' })}}/>
      </div>
    );
  }
}

export default App;
