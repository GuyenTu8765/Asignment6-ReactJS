import React from "react";
import "./Exercise1.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>HeLlo, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Question1 extends React.Component {
  render() {
    return (
      <>
        <Clock />
      </>
    );
  }
}

class LifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello" };
    console.log("Constructor");
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  changeState = () => {
    this.setState({ message: "Hello World" });
    console.log("Change State");
  };

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate: " + false);
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }
}

class Question2 extends React.Component {
  render() {
    return (
      <>
        <LifeCycleDemo />
      </>
    );
  }
}

const WarningBanner = (props) => {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
};

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render() {
    return (
      <>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </>
    );
  }
}

class Question3 extends React.Component {
  render() {
    return (
      <>
        <Page />
      </>
    );
  }
}

class Question4 extends React.Component {
  render() {
    return (
      <>
        <h1>Random number: {Math.random()} </h1>
        <button onClick={() => this.forceUpdate()}>Refresh</button>
      </>
    );
  }
}

export default { Question1, Question2, Question3, Question4 };
