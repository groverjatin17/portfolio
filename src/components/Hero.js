import React, { Component } from "react";
import giphy from "../assets/city.gif";
import "../css/cursiveFont.css";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.5);
`;

const Giphy = styled.img`
    width:100%;
    height:100vh;
    `;

const ImageCenterDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: -120px;
  // border: 5px solid black;
` 

const PortfolioLogo = styled.p`
  position: absolute;
  font-family: Cedarville Cursive, cursive;
  font-size: 50px;
  top: 0px;
  margin: 0px;
`;
// const scrollDown={
//   position:'absolute',
//   display:'flex',
//   justifyContent:centerButton,
//   bottom:'10px'}

const WelcomeMessage = styled.p`
  // font-family: Arial, Helvetica sans-serif;
  color: white;
  font-weight:bold;
  font-size:40px
`;
export default class Hero extends Component {
  render() {
    return (
      <>
        <Container>
          <ImageOverlay></ImageOverlay>
          <PortfolioLogo>Jatin Grover</PortfolioLogo>

          <Giphy
            src={giphy}
            alt={"Loading..."}
          />

          <ImageCenterDiv>
            <WelcomeMessage>
              Hi, I am Jatin. I am a Web Developer.
              <br/>
              I build interactive Websites
            </WelcomeMessage>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <input type="button" value="Click Me" />
            </div>
          </ImageCenterDiv>
          {/* <div style={scrollDown}>Click here to go down</div> */}
        </Container>
      </>
    );
  }
}
