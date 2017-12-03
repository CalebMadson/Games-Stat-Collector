import React, { Component } from "react";
import styled from "styled-components";
import { Form } from "semantic-ui-react";

import NavBar from "../components/NavBar";

class PUBG extends Component {
  constructor() {
    super();

    this.state = {
      username: ""
    };
  }

  onInputChange = event => {
    event.persist();

    this.setState(state => {
      return {
        [event.target.name]: event.target.value
      };
    });
  };

  onFormSubmit = event => {
    console.log(this.state);
  };

  render() {
    return (
      <Container>
        <NavBar />
        <Spacer />
        <Header>PUBG Stats</Header>
        <Spacer />
        <Body>
          <Form style={styles.Form} onSubmit={this.onFormSubmit}>
            <Form.Input
              type="text"
              name={"username"}
              placeholder={"Username"}
              onChange={this.onInputChange}
            />&nbsp;
            <Form.Input type="submit" />
          </Form>
        </Body>
      </Container>
    );
  }
}

const Container = styled.div`
  background-color: rgb(0, 0, 0);
  height: 100vh;
`;

const Spacer = styled.div`
  height: 5%;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  color: orangered;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const styles = {
  Form: {
    display: "flex",
    flexDirection: "row"
  }
};

export default PUBG;
