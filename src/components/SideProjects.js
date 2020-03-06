import React, { Component } from "react";
import Marshmellow from "../assets/Coding3.jpg";
import styled from "styled-components";
import automation from "../assets/automation.jpg";
import communique from "../assets/communique.png";
import testing from "../assets/testing.png";
import neo4j from "../assets/neo4j.jpg";
import dashboard from "../assets/dashboard.png";
import stock from "../assets/stock.jpg";

import { GiRobotAntennas, GiPerspectiveDiceFive } from "react-icons/gi";

import { HoverProject, ButtonProject, RotateProject } from "./Project.js";
import { ProjectContainer, Tooltip } from "../styles/Project.style";

import {Communique, FailedTradeReport, Neo4j, RtController, Mt599, ELKStack, SharePointPDR, } from '../data/ProjectInfo';

export default class SideProjects extends Component {
  render() {
    return (
      // <MyDiv>
      //    <Image src={Marshmellow} />
      //    <Opacity/>
      // </MyDiv>
      <>
        <ProjectContainer>
          <HoverProject backgroundImage={communique} project={Communique} />
          <ButtonProject backgroundImage={automation} project={SharePointPDR}/>
          <RotateProject backgroundImage={testing} project={RtController} />
        </ProjectContainer>
        <ProjectContainer>
        <HoverProject backgroundImage={neo4j} project={Neo4j}/>
          <ButtonProject backgroundImage={dashboard} project={ELKStack} />
          <RotateProject backgroundImage={stock} project={FailedTradeReport}/>
        </ProjectContainer>

      </>
    );
  }
}
