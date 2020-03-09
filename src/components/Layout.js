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
          <h1 className='section-title'>Technical Languages</h1>
          <Cards />
          <h1 className='section-title'>Projects</h1>
          <SideProjects />
          <img
            src={workformoney}
            alt="Loading..."
            style={{ maxWidth: "500px" }}
          />
          <SocialMedia />
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
