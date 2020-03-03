import React, { Component } from 'react'
import {connect} from 'react-redux';

import {getHarryPotterCharacters} from '../actions/actions_info';
import PotterCharacterSearch from './PotterCharacterSearch';


const PotterPrimarySection= function() {
    return (
        <div>
            <img 
                src="https://assets.wizardingworld.com/frontend/_next/static/images/hermione-421-8c565d7253d639f7edf4f265a7009042.png"
                alt='Hermoine'
            />
            <img 
                src="https://assets.wizardingworld.com/frontend/_next/static/images/harry-458-aefae6bd54a7de63268d95f169c69d55.png"
                alt='Harry'
            />
            <img 
                src="https://assets.wizardingworld.com/frontend/_next/static/images/ron-414-0364bfdcd4a1572dc7f51c7985998e5a.png"
                alt='Ron'
            />
        </div>
    )
}

class PotterPage extends Component {

    componentDidMount() {
        console.log('Potter page mounted');
        this.props.getCharacters();
    }

    render() {
        console.log('Potter Props are', this.props);
        const {potterCharacters} = this.props.potterReducer;
        return (
            <div style={{margin: '0 50px 0 50px'}}>
                <PotterPrimarySection />
                <PotterCharacterSearch />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    potterReducer: state.potterReducer
})

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => dispatch(getHarryPotterCharacters())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PotterPage);
