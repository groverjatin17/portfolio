import React from 'react';
import { CardDiv, BackDiv, FrontDiv } from '../../../../styles/Effects.style';

export default function RotateProject(props) {
    const { data, backgroundImage, onClickHandler } = props;

    return (
        <CardDiv
            onClick={() => {
                onClickHandler(data);
            }}
        >
            <FrontDiv>
                <img src={backgroundImage} alt='project description' />
            </FrontDiv>
            <BackDiv>
                <h1 style={{ padding: 0, margin: 0 }}>{data.Title}</h1>
            </BackDiv>
        </CardDiv>
    );
}
