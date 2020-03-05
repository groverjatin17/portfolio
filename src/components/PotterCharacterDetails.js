import React, { Component } from 'react';
import {Segment, Grid, Header} from 'semantic-ui-react';

import {CHARACTER_IMAGES} from './common/global-constants/PotterPageConstants';

export default class PotterCharacterDetails extends Component {
    render() {
        return (
            <div>
                <Segment>
                    <Grid>
                        <h1>Harry Potter</h1>
                        <p> Hogwart scholl of wizardry</p>
                        <p>Gryffindor</p>
                    <Grid.Row columns={3}>
                        <Grid.Column >
                            <img src={CHARACTER_IMAGES.WAND} alt='wand' style={{width: '40px', height: '40px', float: 'left'}}/>
                            <p style={{margin:'0px 0 0 0', display: 'content', fontSize: '25px', fontWeight: 700, color: ' #e0aa40'}}>Wand</p>
                            <p style={{marginLeft: '40px', fontSize: '17px'}}>DragonWood</p>
                        </Grid.Column>
                        <Grid.Column >
                        <img src={CHARACTER_IMAGES.ORDER_OF_THE_PHOENIX} alt='wand' style={{width: '40px', height: '40px', float: 'left'}}/>
                                <p style={{margin:'0px 0 0 0', display: 'content', fontSize: '25px', fontWeight: 700, color: ' #e0aa40'}}>Order of the Phoenix</p>
                                <p style={{marginLeft: '40px', fontSize: '17px'}}>DragonWood</p>
                        </Grid.Column>
                        <Grid.Column >
                            <img src={CHARACTER_IMAGES.BOGGART} alt='wand' style={{width: '40px', height: '40px', float: 'left'}}/>
                            <p style={{margin:'0px 0 0 0', display: 'content', fontSize: '25px', fontWeight: 700, color: ' #e0aa40'}}>Boggart</p>
                            <p style={{marginLeft: '40px', fontSize: '17px'}}>DragonWood</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3} >
                        <Grid.Column >
                        <img src={CHARACTER_IMAGES.PATRONUS} alt='wand' style={{width: '40px', height: '40px', float: 'left'}}/>
                            <p style={{margin:'0px 0 0 0', display: 'content', fontSize: '25px', fontWeight: 700, color: ' #e0aa40'}}>Patronus</p>
                            <p style={{marginLeft: '40px', fontSize: '17px'}}>DragonWood</p>

                        </Grid.Column>
                        <Grid.Column >
                        <img src={CHARACTER_IMAGES.BLOOD_TYPE} alt='wand' style={{width: '40px', height: '40px', float: 'left'}}/>
                                <p style={{margin:'0px 0 0 0', display: 'content', fontSize: '25px', fontWeight: 700, color: ' #e0aa40'}}>Blood Type</p>
                                <p style={{marginLeft: '40px', fontSize: '17px'}}>Pure-Blood</p>
                        </Grid.Column>
                        <Grid.Column >
                        <img src={CHARACTER_IMAGES.ANIMAGUS} alt='wand' style={{width: '40px', height: '40px', float: 'left'}}/>
                                <p style={{margin:'0px 0 0 0', display: 'content', fontSize: '25px', fontWeight: 700, color: ' #e0aa40'}}>Animagus</p>
                                <p style={{marginLeft: '40px', fontSize: '17px'}}>DragonWood</p>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
