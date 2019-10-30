import Hero from "./Hero";
import Cards from "./Cards";
import SideProjects from "./SideProjects";
import workformoney from '../assets/workformoney.gif'
import SocialMedia from "./SocialMedia.js";



import React, { Component } from "react";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Hero />
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
      </>
    );
  }
}
