import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import '../../styles/scss/react-transitions.scss';

 class ProjectDescription extends Component {

    render() {
        console.log('router Items, ', this.props);
        
        return (
            <div className="react-transition woah">
                <h2>Project Name: {this.props.location.state.project.projectName}</h2>
                <h3>Project Description:{this.props.location.state.project.projectDescription}</h3>
                <p>main points in list</p>
                <ul>
                {this.props.location.state.project.projectPoints
                    .map((item, key) =>(<li key={key}>{item}</li>))}
                </ul>
            </div>
        )
    }
}

export default withRouter(ProjectDescription);