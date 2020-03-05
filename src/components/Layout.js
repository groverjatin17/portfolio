import Hero from "./Hero";
import Cards from "./Cards";
import SideProjects from "./SideProjects";
import workformoney from '../assets/workformoney.gif'
import SocialMedia from "./SocialMedia.js";
import {connect} from 'react-redux';


import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <>
        <Hero />
        <div style={{margin: '5px 20px'}}>
        <center>
          <h1> Technical Languages</h1>
        </center>
        <Cards />
        <center>
          <h1> Projects</h1>
        </center>
        <SideProjects />
        <img
          src={workformoney}
          alt="Loading..."
          style={{ maxWidth: "500px" }}
        />
        <SocialMedia />
        <p> A page where we have cool css filled buttons where each performs some cool new sort of 
          functions such as geolocation fetching, webcam activation, stripe payment etc
        </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
    reducerInfo: state.reducerInfo,
    potterReducer: state.potterReducer
})

export default connect(mapStateToProps)(Layout);
