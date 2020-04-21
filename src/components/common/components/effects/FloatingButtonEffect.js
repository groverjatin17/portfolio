import React from "react";
import {
  CardDiv,
  Card2OverlayDiv,
  Card2OverlayPtag,
} from "../../../../styles/Effects.style";

const ImageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  position: "absolute",
  borderRadius: '10px'
};

export default function FloatingButtonEffect(props) {
    const { data, backgroundImage, onClickHandler } = props;

    return (
    <CardDiv>
      <img src={backgroundImage} style={ImageStyle} alt='project'/>
      <Card2OverlayDiv 
      onClick={() => {onClickHandler(data)}}
      >
        <Card2OverlayPtag>{data.Title}></Card2OverlayPtag>
      </Card2OverlayDiv>
    </CardDiv>
  );
}