import styled from "styled-components";
import { GiRobotAntennas, GiPerspectiveDiceFive } from "react-icons/gi";

export const MyDiv = styled.div`
  position: relative;
  background: red;
  width: 95vw;
  height: 100vh;
  // -webkit-transform: skewX(40deg);
  // backface-visibility: hidden;
  // max-width: 90%;
  transform: skewX(-10deg);
  overflow: hidden;
  // float:left;
  transform-origin: 50% 70%;
`;

export const Image = styled.img`
  // position:absolute;
  left: -200px;
  // overflow:hidden;
  width: 120vw;
  height: 100%;
  transform: skewX(10deg);
  background-color: black;
  transform-origin: 50% 70%;
`;

export const Opacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.3);
`;

export const ProjectContainer = styled.div`
  //   width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-bottom: 18px;
`;

export const CardDiv = styled.div`
  & {
    position: relative;
    width: 300px;
    height: 180px;
    // border:1px solid
  }

  //   &:hover {
  //     // background-color: yellow;
  //     // transform:scale(1.5);
  //   }
`;

export const CardHoverOverlay = styled.div`
  & {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    // border:1px solid;
    justify-contents: center;
    // align-items:center;
    text-align: center;
  }
  &:hover {
    display: flex;
    background-color: lightblue;
    height: 100%;
    width: 100%;
    transition: background-color 0.5s;
    // border:1px solid;
    justify-contents: center;
    // align-items:center;

    // text-align:center;
  }
`;

export const CardHoverMessage = styled.p`
    &{
        margin-top:25px;
        font-family: Arial, Helvetica, sans-serif;
        position:absolute;
        top:44.4%;
        opacity:0;
        color:white;
        font-weight:bold;
        left:33.3%;
        border:1px solid;
    }



    ${CardHoverOverlay}:hover &{
        opacity:1
        transition:opacity 0.6s
    }
`;

export const MyIcon = styled(GiRobotAntennas)`
&{
    position:absolute;
    opacity:0;
    font-size:60px;
    color:white;
    top:22.2%;
    left:40%;
}

${CardHoverOverlay}:hover &{
    opacity:1
    transition:opacity 0.6s
}
`;

export const Card2OverlayDiv = styled.div`
  & {
    position: absolute;
    width: 100%;
    height: 20%;
    background-image: linear-gradient(to top right, white, lightblue);
    bottom: 5%;
    left: 5%;
    border-radius: 4px;
    text-align: center;
  }

  &:hover {
    background-image: linear-gradient(to top right, lightblue, white);
    -webkit-transition: background-image 2s ease-in-out;
  }
`;

export const Card2OverlayPtag = styled.p`
  margin-top: 5px;
  font-weight: bold;
  color: white;
`;

export const BackDiv = styled.div`
  & {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    overflow: hidden;
    backface-visibility: hidden;
    text-align: center;
    transform: Perspective(600px) rotateY(180deg);
    transition: transform 0.6s linear;
  }

  ${CardDiv}:hover & {
    transform: Perspective(600px) rotateY(0deg);
  }
`;

export const FrontDiv = styled.div`
  & {
    // overflow: hidden;
    transform: Perspective(600px) rotateY(0deg);
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.6s linear;
  }

  ${CardDiv}:hover & {
    transform: Perspective(600px) rotateY(-180deg);
  }
`;

export const Tooltip = styled.span`
  & {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 10px 10px;
    position: absolute;
    z-index: 1;
  }

  ${CardDiv}:hover &{
    visibility: visible;
  }
`;
