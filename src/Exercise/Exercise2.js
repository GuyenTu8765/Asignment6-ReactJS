import React from "react";

class PersonA extends React.PureComponent {
  renderFullName = () => {
    return `${this.props.firstName} ${this.props.lastName}`;
  };

  render() {
    console.log("Person " + this.props.id + "rendered");
    return (
      <div className="person">
        <h1>Full Name: {this.renderFullName()}</h1>
      </div>
    );
  }
}

class Question1a extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          firstName: "nguyen van",
          lastName: "Tu",
        },
        {
          id: 2,
          firstName: "nguyen van",
          lastName: "Tu1",
        },
        {
          id: 3,
          firstName: "nguyen van",
          lastName: "Tu1",
        },
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((oldState) => {
        return { persons: [...oldState.persons] };
      });
    }, 1000);
  }

  render() {
    console.log("app rendered!");
    const personList = this.state.persons.map((person) => (
      <PersonA
        key={person.id}
        id={person.id}
        firstName={person.firstName}
        lastName={person.lastName}
      ></PersonA>
    ));
    return <>{personList}</>;
  }
}

class PersonB extends React.Component {
  renderFullName = () => {
    return `${this.props.firstName} ${this.props.lastName}`;
  };

  shouldComponentUpdate(newProps, newState) {
    if (
      this.props.firstName === newProps.firstName &&
      this.props.lastName === newProps.lastName
    ) {
      return false;
    }
    return true;
  }
  render() {
    console.log("Person " + this.props.id + "rendered");
    return (
      <div className="person">
        <h1>Full Name: {this.renderFullName()}</h1>
      </div>
    );
  }
}

class Question1b extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          id: 1,
          firstName: "nguyen van",
          lastName: "Tu",
        },
        {
          id: 2,
          firstName: "nguyen van",
          lastName: "Tu1",
        },
        {
          id: 3,
          firstName: "nguyen van",
          lastName: "Tu1",
        },
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((oldState) => {
        return { persons: [...oldState.persons] };
      });
    }, 1000);
  }

  render() {
    console.log("app rendered!");
    const personList = this.state.persons.map((person) => (
      <PersonB
        key={person.id}
        id={person.id}
        firstName={person.firstName}
        lastName={person.lastName}
      ></PersonB>
    ));
    return <>{personList}</>;
  }
}

export default { Question1a, Question1b };
