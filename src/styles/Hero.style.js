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
` ;

const Button = styled.button`
padding: 10px;
letter-spacing: 1px;
background: transparent;
border: 1px solid lightsalmon;
border-radius: 15px;
outline: none;
font-weight: 600;
color: sandybrown;
cursor: pointer;
position: absolute;
left: 45%;
bottom: 45%;
`;

const WelcomeMessage = styled.p`
  color: white;
  font-weight:bold;
  font-size:40px
`;

export {Container, ImageOverlay, Giphy, Button, ImageCenterDiv, WelcomeMessage}
