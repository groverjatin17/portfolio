import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import giphy from '../../assets/images/city.gif';
import '../../styles/scss/index.scss';
import {
    Container,
    ImageOverlay,
    Giphy,
    Button,
    ImageCenterDiv,
    WelcomeMessage,
} from '../../styles/Hero.style';

import NavigationBar from '../NavigationBar';
import Sidebar from '../common/components/Sidebar';

export default class Hero extends Component {
    render() {
        const { scrollIntoView } = this.props;
        return (
            <Sidebar>
                <Container className='top-panel'>
                    <ImageOverlay>
                        <ImageCenterDiv>
                            <WelcomeMessage>
                                <FormattedMessage
                                    id='hero.description1'
                                    defaultMessage='Hi, I am Jatin. I am a Web Developer.'
                                />
                                <br />
                                <FormattedMessage
                                    id='hero.description2'
                                    defaultMessage='I build interactive Websites'
                                />
                            </WelcomeMessage>
                            <Button onClick={scrollIntoView}>
                                <FormattedMessage
                                    id='hero.viewProjects'
                                    defaultMessage='View projects'
                                />
                            </Button>
                        </ImageCenterDiv>
                    </ImageOverlay>
                    <NavigationBar />
                    <Giphy src={giphy} alt='Loading...' />
                </Container>
            </Sidebar>
        );
    }
}
