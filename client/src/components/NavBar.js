import React, { Component } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

class Home extends Component {
  gotoPUBG = () => {
    this.props.history.push("/pubg-stats");
  };

  gotoLeague = () => {
    this.props.history.push("/league-stats");
  };

  render() {
    return (
      <Container>
        <Body>
          <Mybutton
            onClick={() => {
              this.gotoPUBG();
            }}
          >
            PUBG
          </Mybutton>
          <Mybutton
            onClick={() => {
              this.gotoLeague();
            }}
          >
            League of Legends
          </Mybutton>
        </Body>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
`;

const Body = styled.div`
  background-color: ghostwhite;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  width: 50%;
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0px 7px 10px 4px rgb(100, 100, 100);
`;

const Mybutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 150px;
  &:hover {
    background-color: dodgerblue;
    border-right: 2px solid black;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
  }
`;

export default withRouter(Home);
