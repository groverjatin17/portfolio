import React from "react";
import {
  CardDiv,
  Card2OverlayDiv,
  Card2OverlayPtag,
  BackDiv,
  FrontDiv
} from "../../styles/Project.style";
import {Reveal, Image} from 'semantic-ui-react';

import history from '../History.js'

const ImageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  position: "absolute",
  borderRadius: '10px'
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

  return (
    <Reveal animated='small fade' onClick={() => {openProject(props.project)}}>
      <Reveal.Content visible>
        <Image src={props.backgroundImage} style={{borderRadius: '10px'}}/>
      </Reveal.Content>
      <Reveal.Content hidden>
        <div style={{width: '300px', height:'180px', backgroundColor: 'white'}}>{props.project.projectTitle}</div>
      </Reveal.Content>
    </Reveal>
  );
}

export function ButtonProject(props) {

    return (
    <CardDiv>
      <img src={props.backgroundImage} style={ImageStyle} alt='project'/>
      <Card2OverlayDiv 
      onClick={()=>{openProject(props.project)}}
      >
        <Card2OverlayPtag>{props.project.projectTitle}></Card2OverlayPtag>
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
          alt='project description'
          style={{ 
            width: "300px", 
            height:'180px',
            borderRadius: '10px'
        }}
        />
      </FrontDiv>
      <BackDiv>
        <h1 style={{ padding: 0, margin: 0 }}>{props.project.projectTitle}</h1>
      </BackDiv>
    </CardDiv>
  );
}


