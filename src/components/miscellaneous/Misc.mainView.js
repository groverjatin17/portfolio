import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import NavigationBar from '../NavigationBar';
import MapBox from './MapBox';
import D3 from './D3';
import Sidebar from '../common/components/Sidebar';

const compArray = [
    {
        compId: 1,
        component: <D3 />,
    },
    {
        compId: 2,
        component: <MapBox />,
    },
    {
        compId: 3,
        component: <h1>component 3</h1>,
    },
];

export default class Miscellaneous extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComponent: compArray[0].component,
        };
    }

    changeComponent = (activeComponentId) => {
        this.setState({
            activeComponent: compArray[activeComponentId].component,
        });
    };

    render() {
        const { activeComponent } = this.state;
        return (
            <Sidebar>
                <NavigationBar theme='dark' />

                <Grid style={{ margin: '10px', height: '89vh' }}>
                    <Grid.Column width='4' style={{ border: '1px solid' }}>
                        <h1>Misc page</h1>
                        <button
                            type='button'
                            onClick={() => this.changeComponent(0)}
                        >
                            Component 1
                        </button>
                        <button
                            type='button'
                            onClick={() => this.changeComponent(1)}
                        >
                            Component 2
                        </button>
                        <button
                            type='button'
                            onClick={() => this.changeComponent(2)}
                        >
                            Component 3
                        </button>
                    </Grid.Column>
                    <Grid.Column
                        width='12'
                        style={{ border: '1px solid', overflow: 'hidden' }}
                    >
                        {activeComponent}
                    </Grid.Column>
                </Grid>
            </Sidebar>
        );
    }
}
