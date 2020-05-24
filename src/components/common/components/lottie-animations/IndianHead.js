import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../../../styles/animations/9417-indian-hat-animation.json';

export default function IndianHead(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const { height, width, additionalStyle } = props;

    return (
        <Lottie
            options={defaultOptions}
            height={height}
            width={width}
            style={additionalStyle}
        />
    );
}
