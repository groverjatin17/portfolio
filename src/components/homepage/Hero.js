import React, { Component } from "react";
import giphy from "../../assets/city.gif";
import "../../styles/scss/index.scss";
import {Container, ImageOverlay, Giphy, Button, ImageCenterDiv, WelcomeMessage} from '../../styles/Hero.style'

import NavigationBar from '../NavigationBar';

export default class Hero extends Component {
  render() {
    return (
      <>
        <Container
            className='top-panel'
            >
          <ImageOverlay></ImageOverlay>
          <NavigationBar />
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
          </ImageCenterDiv>
          <Button onClick={this.props.scrollIntoView}>View Projects</Button>
        </Container>
      </>
    );
  }
}
