import React from 'react'
import {withRouter} from 'react-router-dom'

import NavigationBar from '../NavigationBar';
import ProjectDesc from '../../assets/ProjectDesc.jpg'
import '../../styles/scss/react-transitions.scss';
import {GiDiamonds} from 'react-icons/gi'
function ProjectDescription(props) {

    const renderProjectDetails = function() {
        return(
            <div 
            className="react-transition swipe-left project-container"
            style={{
                // backgroundImage: `url(${ProjectDesc})`,
                backgroundImage: `linear-gradient(90deg, red, transparent)`,
            }}
            >
                <div className='project-desc' >

                <h2>{props.location.state.project.projectName}</h2>
                <h3>Project Description:{props.location.state.project.projectDescription}</h3>
                <ul>
                    {props.location.state.project.projectPoints
                    .map((item, key) =>(<li key={key}>{item}</li>))}
                </ul>
                </div>
            </div>
        )
    }

    return (
        <>
        <NavigationBar theme= 'dark' />
            {renderProjectDetails()}
        </>
    )
}

export default withRouter(ProjectDescription);