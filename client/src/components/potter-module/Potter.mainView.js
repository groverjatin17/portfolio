import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import PinkLoader from '../common/components/lottie-animations/PinkLoader';
import NavigationBar from '../NavigationBar';
import { getHarryPotterCharacters } from '../../actions/actions_info';
import PotterCharacterSearch from './PotterCharacterSearch';
import PotterCharacterDetails from './PotterCharacterDetails';
import Sidebar from '../common/components/Sidebar';

const PotterCharacterTable = lazy(() => import('./PotterCharacterTable'));

class PotterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterId: '5a12292a0f5ae10021650d7e',
        };
    }

    componentDidMount() {
        const { getCharacters } = this.props;
        getCharacters();
    }

    getSelectedCharacter = () => {
        const { characterId } = this.state;
        const { potterCharacters } = this.props;
        const selectedCharacter = potterCharacters.data.find(
            (item) => item._id === characterId
        );
        return selectedCharacter;
    };

    handleSelectedCharacter = (character) => {
        if (character) {
            this.setState({ characterId: character.id });
        }
    };

    render() {
        const characterDetails = this.getSelectedCharacter();
        const { potterCharacters } = this.props;
        return (
            <Sidebar>
                <NavigationBar theme='dark' />
                <div className='potter-route'>
                    <h1 className='potter-title'>Harry Potter</h1>
                    <PotterCharacterSearch
                        handleSelectedCharacter={this.handleSelectedCharacter}
                    />
                    {potterCharacters.loading ? (
                        <PinkLoader />
                    ) : (
                        characterDetails && (
                            <PotterCharacterDetails
                                characterDetails={characterDetails}
                            />
                        )
                    )}

                    {/* Below is the example of Lazy loading. Meaning that first our PotterPage will be loaded and then PotterCharacter table will be fetched
                while Potter page is loading. In below chances are that we will not see the fallback because browser saves in cache. But if we click "Empty cache and hard reload
                    we will see the fallback message. At the time of this comment fallback in suspense is <h1>Its loading..........</h1>" */}
                    <Suspense fallback={<PinkLoader />}>
                        <PotterCharacterTable />
                    </Suspense>
                </div>
            </Sidebar>
        );
    }
}

const mapStateToProps = (state) => ({
    potterCharacters: state.potterReducer.potterCharacters,
});

const mapDispatchToProps = (dispatch) => ({
    getCharacters: () => dispatch(getHarryPotterCharacters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PotterPage);
