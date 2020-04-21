
import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../../../styles/animations/9417-indian-hat-animation.json';

export default function IndianHead(props) {

    const defaultOptions = {
        loop: true, 
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
    }
    return (
        <Lottie 
            options={defaultOptions}
            height={props.height}
            width={props.width}
        />
    )
}


