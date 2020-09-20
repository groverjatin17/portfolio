import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../../../styles/animations/50-material-loader.json';

export default function PinkLoader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return <Lottie options={defaultOptions} height={100} width={100} />;
}
