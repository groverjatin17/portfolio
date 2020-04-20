import React from "react";
import {Reveal, Image} from 'semantic-ui-react';

export default function RevealEffect(props) {
    const { data, backgroundImage, onClickHandler } = props;

    return (
      <Reveal animated='small fade' onClick={() => {onClickHandler(data)}}>
        <Reveal.Content visible>
          <Image src={backgroundImage} style={{borderRadius: '10px'}}/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <div style={{width: '300px', height:'180px', backgroundColor: 'white'}}>{data.Title}</div>
        </Reveal.Content>
      </Reveal>
    );
  }