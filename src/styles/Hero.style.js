import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Giphy = styled.img`
    width: 100%;
    height: 100vh;
`;

const ImageCenterDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    padding: 10px;
    letter-spacing: 1px;
    background: transparent;
    border: 1px solid lightsalmon;
    border-radius: 15px;
    outline: none;
    font-weight: 600;
    color: sandybrown;
    cursor: pointer;

    &:hover {
        color: white;
        background-color: sandybrown;
        border: 1px solid white;
    }
`;

const WelcomeMessage = styled.p`
    color: white;
    font-weight: bold;
    font-size: 40px;

    @media (max-width: 768px) {
        font-size: 30px;
        text-align: center;
        br {
            display: none;
        }
    }
`;

export {
    Container,
    ImageOverlay,
    Giphy,
    Button,
    ImageCenterDiv,
    WelcomeMessage,
};
