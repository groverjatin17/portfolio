import React, { Component } from "react";
import Marshmellow from "../../assets/images/Coding3.jpg";
import {css} from "styled-components";
import automation from "../../assets/images/automation.jpg";
import communique from "../../assets/images/communique.png";
import testing from "../../assets/images/testing.png";
import neo4j from "../../assets/images/neo4j.jpg";
import dashboard from "../../assets/images/dashboard.png";
import stock from "../../assets/images/stock.jpg";

import { HoverProject, ButtonProject, RotateProject } from "./Project.js";
import { ProjectContainer, Tooltip } from "../../styles/Project.style";

import {Communique, FailedTradeReport, Neo4j, RtController, Mt599, ELKStack, SharePointPDR, } from '../../data/ProjectInfo';

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
