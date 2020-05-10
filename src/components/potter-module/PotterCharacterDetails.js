import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import { CHARACTER_IMAGES } from '../common/global-constants/PotterPage.consts';

function CharacterFeature(props) {
    const { label, value, icon } = props;
    let newValue = '';
    if (label === 'Order of the Phoenix') {
        if (value) {
            newValue = 'yes';
        } else {
            newValue = 'no';
        }
    } else {
        newValue = props.value;
    }

    return (
        <Grid.Column>
            <img src={icon} alt={label} />
            <p className='potter-heading'>{label}</p>
            <p className='potter-value'>{newValue}</p>
        </Grid.Column>
    );
}

export default class PotterCharacterDetails extends Component {
    render() {
        const { characterDetails } = this.props;
        return (
            <Segment className='potter-character-details'>
                <Grid>
                    <h1>Harry Potter</h1>
                    <p> Hogwart scholl of wizardry</p>
                    <p>Gryffindor</p>
                    <Grid.Row columns={3}>
                        <CharacterFeature
                            icon={CHARACTER_IMAGES.WAND}
                            label='Wand'
                            value={characterDetails && characterDetails.wand}
                        />
                        <CharacterFeature
                            icon={CHARACTER_IMAGES.ORDER_OF_THE_PHOENIX}
                            label='Order of the Phoenix'
                            value={
                                characterDetails &&
                                characterDetails.orderOfThePhoenix
                            }
                        />
                        <CharacterFeature
                            icon={CHARACTER_IMAGES.BOGGART}
                            label='Boggart'
                            value={characterDetails && characterDetails.boggart}
                        />
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <CharacterFeature
                            icon={CHARACTER_IMAGES.PATRONUS}
                            label='Patronus'
                            value={
                                characterDetails && characterDetails.patronus
                            }
                        />
                        <CharacterFeature
                            icon={CHARACTER_IMAGES.BLOOD_TYPE}
                            label='Blood Type'
                            value={
                                characterDetails && characterDetails.bloodStatus
                            }
                        />
                        <CharacterFeature
                            icon={CHARACTER_IMAGES.ANIMAGUS}
                            label='Animagus'
                            value={
                                characterDetails && characterDetails.animagus
                            }
                        />
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}
