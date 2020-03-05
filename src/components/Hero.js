import React, { Component } from "react";
import giphy from "../assets/city.gif";
import "../styles/scss/cursiveFont.scss"
import {Container, ImageOverlay, Giphy, ImageCenterDiv, PortfolioLogo, WelcomeMessage} from '../styles/Hero.style'


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
