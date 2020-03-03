import React, { Component } from 'react'
import {connect} from 'react-redux';

import {getHarryPotterCharacters} from '../actions/actions_info';

class PotterPage extends Component {

    componentDidMount() {
        this.props.getCharacters();
    }
    render() {
        console.log('Potter Props are', this.props);
        
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
