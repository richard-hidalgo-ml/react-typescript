import PropTypes from 'prop-types';
import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.startFrom,
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button className="inc" onClick={this.increment}>Increment!</button>
        <button className="dec" onClick={this.decrement}>Decrement!</button>
        <button className="reset" onClick={this.reset}>Reset</button>
        <h1>
          Current Count:
          {' '}
          {count}
        </h1>
      </div>
    );
  }
}

Counter.propTypes = {
  startFrom: PropTypes.number,
};

Counter.defaultProps = {
  startFrom: 0,
};

export { Counter };
