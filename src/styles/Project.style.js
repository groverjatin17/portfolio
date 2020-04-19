import styled from "styled-components";

export const ProjectContainer = styled.div`
  //   width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
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
  margin-top: 7px !important
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
