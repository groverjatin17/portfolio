import React from 'react'
import {withRouter} from 'react-router-dom'

import '../../styles/scss/react-transitions.scss';
import NavigationBar from '../NavigationBar';

function ProjectDescription(props) {

    const renderProjectDetails = function() {
        return(
            <div className="react-transition woah">
                <h2>Project Name: {props.location.state.project.projectName}</h2>
                <h3>Project Description:{props.location.state.project.projectDescription}</h3>
                <p>main points in list</p>
                <ul>
                    {props.location.state.project.projectPoints
                    .map((item, key) =>(<li key={key}>{item}</li>))}
                </ul>
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