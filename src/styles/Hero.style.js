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

const WelcomeMessage = styled.p`
  // font-family: Arial, Helvetica sans-serif;
  color: white;
  font-weight:bold;
  font-size:40px
`;

export {Container, ImageOverlay, Giphy, ImageCenterDiv, PortfolioLogo, WelcomeMessage}