import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import _ from 'lodash'

import {getRandomTechImage} from '../../actions/actions_info';
import PinkLoader from '../common/components/PinkLoader';
import '../../styles/scss/react-transitions.scss';
import NavigationBar from '../NavigationBar';

function ProjectDescription(props) {

    useEffect(() => {
        props.getImage()
    }, [])

    const projectBackgroundImage = props.projectBackgroundImage;
    let projectBackgroundImageUrl = '';
    if(_.isEmpty(projectBackgroundImage)) {
    } else {
        projectBackgroundImageUrl = props.projectBackgroundImage.urls.regular;
    }

    const renderProjectDetails = function() {
 return(
    <div 
        className="react-transition woah" 
        style={{
            backgroundImage: `url(${projectBackgroundImageUrl})`, 
            height: '100vh',
            opacity: '0.7'}}>
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
            { _.isEmpty(projectBackgroundImage) ? <PinkLoader /> : renderProjectDetails() }
        </>
    )
}

const mapStateToProps = state => ({
    projectBackgroundImage: state.projectReducer.projectBackgroundImage
})

const mapDispatchToProps = dispatch => {
    return {
        getImage: () => dispatch(getRandomTechImage())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(ProjectDescription));