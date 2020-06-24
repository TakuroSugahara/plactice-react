import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

class App extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>counter {props.count}</div>
        <button onClick={props.increment}>+ 1</button>
        <button onClick={props.decrement}>+ 1</button>
      </React.Fragment>
    );
  }
}

const mapStateToPorps = state => ({count: state.count.value});
// const mapDispatchToProps = dispatch => ({
// increment: () => dispatch(increment()),
// decrement: () => dispatch(decrement()),
// });
const mapDispatchToProps = {increment, decrement};

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
)(App);
