import React, { Component, createRef } from "react";
import {Divider} from 'semantic-ui-react';
import Hero from "./Hero";
import Cards from "./Cards";
import SideProjects from "./SideProjects";
import workformoney from '../../assets/workformoney.gif'
import SocialMedia from "./SocialMedia.js";
import {connect} from 'react-redux';


class Layout extends Component {

  constructor(props) {
    super(props);
    this.titleRef = createRef();
}

scrollToTitleRef = () => this.titleRef.current.scrollIntoView({ behavior: 'smooth'});

  render() {
    return (
      <>
        <Hero scrollIntoView={this.scrollToTitleRef} />
        <div style={{margin: '5px 20px'}}>
            <Divider horizontal style={{margin: '30px 0px 10px 0'}}>
              <h1 className='section-title'>Tech Stack</h1>
            </Divider>
          <Cards />
            <Divider horizontal style={{margin: '30px 0px 10px 0'}}>
              <h1 className='section-title' ref={this.titleRef}>Projects</h1>
            </Divider>
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
