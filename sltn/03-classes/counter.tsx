import { Component, ReactNode } from 'react';

interface CounterProps {
  startFrom: number;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  public static defaultProps = {
    startFrom: 0,
  };

  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.startFrom,
    };
  }

  increment(): void {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  decrement(): void {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  reset(): void {
    this.setState({
      count: 0,
    });
  }

  render(): ReactNode {
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

export { Counter };
