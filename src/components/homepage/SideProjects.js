import React, { Component } from 'react';

import { PROJECT_IMAGES } from '../common/global-constants/Homepage.consts';

import RotationEffect from '../common/components/effects/RotationEffect';
import RevealEffect from '../common/components/effects/RevealEffect';
import { ProjectContainer } from '../../styles/Effects.style';

import {
    Communique,
    FailedTradeReport,
    Neo4j,
    RtController,
    ELKStack,
    SharePointPDR,
} from '../../data/ProjectInfo';

import history from '../History';

export default class SideProjects extends Component {
    openProject = (project) => {
        history.push({
            pathname: `/projects/${project.Title}`,
            state: { project },
        });
    };

    render() {
        return (
            <>
                <ProjectContainer>
                    <RotationEffect
                        backgroundImage={PROJECT_IMAGES.COMMUNIQUE}
                        data={Communique}
                        onClickHandler={this.openProject}
                    />
                    <RotationEffect
                        backgroundImage={PROJECT_IMAGES.DASHBOARD}
                        data={ELKStack}
                        onClickHandler={this.openProject}
                    />
                    <RotationEffect
                        backgroundImage={PROJECT_IMAGES.TESTING}
                        data={RtController}
                        onClickHandler={this.openProject}
                    />
                </ProjectContainer>
                <ProjectContainer>
                    <RevealEffect
                        backgroundImage={PROJECT_IMAGES.NEO4J}
                        data={Neo4j}
                        onClickHandler={this.openProject}
                    />
                    <RevealEffect
                        backgroundImage={PROJECT_IMAGES.AUTOMATION}
                        data={SharePointPDR}
                        onClickHandler={this.openProject}
                    />
                    <RevealEffect
                        backgroundImage={PROJECT_IMAGES.STOCK}
                        data={FailedTradeReport}
                        onClickHandler={this.openProject}
                    />
                </ProjectContainer>
            </>
        );
    }
}
