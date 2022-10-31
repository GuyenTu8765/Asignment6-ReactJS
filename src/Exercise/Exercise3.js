import React from "react";
import "./Exercise3.css";
import styles from "./Exercise3.module.css";
import styled from "styled-components";

class Question1aP1 extends React.Component {
  render() {
    return (
      <>
        <h1
          style={{
            color: "green",
            backgroundColor: "lightblue",
            padding: "10px",
            fontFamily: "Arial",
          }}
        >
          FullName: Nguyen Van Tu
        </h1>
      </>
    );
  }
}

class Question1aP2 extends React.Component {
  render() {
    const fullNameStyle = {
      color: "green",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <>
        <h1 style={fullNameStyle}>FullName: Nguyen Van Tu</h1>
      </>
    );
  }
}

class Question1bP1 extends React.Component {
  render() {
    return (
      <>
        <h1 className="fullName">FullName: Nguyen Van Tu</h1>
      </>
    );
  }
}

class Question1bP2 extends React.Component {
  render() {
    console.log(styles);
    return (
      <>
        <h1 className={styles.fullName}>FullName: Nguyen Van Tu</h1>
      </>
    );
  }
}

class Question1c extends React.Component {
  render() {
    const H1 = styled.h1`
      color: green;
      background-color: lightblue;
      padding: 10px;
      font-family: Arial;
    `;
    return (
      <>
        <H1>FullName: Nguyen Van Tu</H1>
      </>
    );
  }
}

class Question2 extends React.Component {
  render() {
    const H1 = styled.h1`
      color: ${(props) => props.textColor};
      background-color: lightblue;
      padding: 10px;
      font-family: Arial;
    `;
    return (
      <>
        <H1 textColor="green">FullName: Nguyen Van Tu</H1>
      </>
    );
  }
}

const BasicNotification = styled.p`
  background-color: lightblue;
  padding: 5px;
  margin: 5px;
  color: black;
`;

const SuccessNotification = styled(BasicNotification)`
  background: lightGreen;
  font-weight: bold;
`;

const ErrorNotification = styled(BasicNotification)`
  background: lightCoral;
  font-weight: bold;
`;
const Question3 = (props) => {
  return (
    <>
      <BasicNotification>Basic Message</BasicNotification>
      <SuccessNotification>Success Message</SuccessNotification>
      <ErrorNotification>Error Message</ErrorNotification>
    </>
  );
};
export default {
  Question1aP1,
  Question1aP2,
  Question1bP1,
  Question1bP2,
  Question1c,
  Question2,
  Question3,
};
