import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import NavigationBar from '../NavigationBar';
import MapBox from "./MapBox";

const compArray = [
  {
    compId: 1,
    component: <MapBox />,
  },
  {
    compId: 2,
    component: <h1 style={{ border: "1px solid" }}>component 1</h1>,
  },
  {
    compId: 3,
    component: <h1>component 3</h1>,
  },
];

export default class Miscellaneous extends Component {
  state = {
    activeComponent: compArray[0].component,
  };

  changeComponent = (activeComponentId) => {
    this.setState({ activeComponent: compArray[activeComponentId].component });
  };
  render() {
    console.log(this.props);
    
    return (
      <>
      <NavigationBar theme= 'dark' />

      <Grid style={{margin: '10px',  height: "89vh"}}>
        <Grid.Column width="4" style={{ border: "1px solid"}}>
          <h1>Misc page</h1>
          <button onClick={() => this.changeComponent(0)}>Component 1</button>
          <button onClick={() => this.changeComponent(1)}>Component 2</button>
          <button onClick={() => this.changeComponent(2)}>Component 3</button>
        </Grid.Column>
        <Grid.Column
          width="12"
          style={{ border: "1px solid", overflow: "hidden"}}
        >
          {this.state.activeComponent}
        </Grid.Column>
      </Grid>
    </>
    );
  }
}