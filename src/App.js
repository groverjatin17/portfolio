import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "./components/Layout";
import History from "./components/History";
import styled from "styled-components";
import { Router, Switch, Route, Link } from "react-router-dom";
import ProjectDescription from "./components/ProjectDescription";
import ContactMe from './components/ContactMe'

const MyImage = styled.img`
  position: fixed;
  right: 0px;
  bottom: 0px;
  border: 1px solid;
`;
class App extends Component {
  render() {
    return (
      <Router history={History}>
        <Route path="/" exact component={Layout}></Route>
          <Route path="/projects"
          component={ProjectDescription}></Route>
        <Route path='/contactme' component={ContactMe} />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  reducerInfo: state.reducerInfo
});

export default connect(mapStateToProps)(App);
