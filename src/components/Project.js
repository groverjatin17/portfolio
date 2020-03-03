import React, { Component } from "react";
import {
  MyDiv,
  Image,
  Opacity,
  ProjectContainer,
  CardDiv,
  CardHoverOverlay,
  CardHoverMessage,
  MyIcon,
  Card2OverlayDiv,
  Card2OverlayPtag,
  BackDiv,
  FrontDiv
} from "../styles/Project.style";

// import {withRouter} from 'react-router-dom';
import history from './History.js'

const ImageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  position: "absolute"
};

const openProject= (project) =>{
    history.push(
        {
            pathname:'./projects/' + project.projectName,
            // search: project.projectName,
            state:{project}
            
        })

}
export function HoverProject(props) {
    let value='hover value';

  return (
    <CardDiv
      onClick={()=>{openProject(props.project)}}
    >
      <img src={props.backgroundImage} style={ImageStyle} />
      <CardHoverOverlay>
        <MyIcon />
        <CardHoverMessage>
        {props.project.projectTitle}
        </CardHoverMessage>
      </CardHoverOverlay>
    </CardDiv>
  );
}

export function ButtonProject(props) {

    return (
    <CardDiv>
      <img src={props.backgroundImage} style={ImageStyle} />
      <Card2OverlayDiv 
      onClick={()=>{openProject(props.project)}}
      >
        <Card2OverlayPtag>Learn More ></Card2OverlayPtag>
      </Card2OverlayDiv>
    </CardDiv>
  );
}


export function RotateProject(props) {

    return (
    <CardDiv 
    onClick={()=>{openProject(props.project)}}
    >
      <FrontDiv>
        <img
          src={props.backgroundImage}
          style={{ width: "300px", 
          height:'180px'
        //   maxHeight: "100%" 
        }}
        />
      </FrontDiv>
      <BackDiv>
        <h1 style={{ padding: 0, margin: 0 }}>{props.project.projectTitle}</h1>
      </BackDiv>
    </CardDiv>
  );
}


