import React from 'react';
import { withRouter } from 'react-router-dom';

import NavigationBar from '../NavigationBar';
import ProjectDesc from '../../assets/images/ProjectDesc.jpg';
import '../../styles/scss/react-transitions.scss';

function ProjectDescription(props) {
    const renderProjectDetails = function () {
        const { location } = props;
        return (
            <div
                className='react-transition swipe-left project-container'
                style={{
                    backgroundImage: `url(${ProjectDesc})`,
                }}
            >
                <div className='project-desc'>
                    <h2>{location.state.project.Name}</h2>
                    <h3>
                        Project Description:{location.state.project.Description}
                    </h3>
                    <ul>
                        {location.state.project.Points.map((item, key) => (
                            <li key={key}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <>
            <NavigationBar theme='dark' />
            {renderProjectDetails()}
        </>
    );
}

export default withRouter(ProjectDescription);
