import React, { Component, lazy, Suspense } from 'react'
import {connect} from 'react-redux';
import Lottie from 'react-lottie';
import * as animationData from '../styles/animations/50-material-loader.json'
import {getHarryPotterCharacters} from '../actions/actions_info';
import PotterCharacterSearch from './PotterCharacterSearch';
import PotterCharacterDetails from './PotterCharacterDetails';

import '../styles/scss/index.scss';

const PotterCharacterTable = lazy(() => import('./PotterCharacterTable'));

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

const defaultOptions = {
    loop: true, 
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
}
class PotterPage extends Component {

    componentDidMount() {
        this.props.getCharacters();
    }

    render() {
        return (
            <div className='potter-route'>
                <h1 className='potter-title'>Harry Potter</h1>
                {/* <PotterPrimarySection /> */}
                <PotterCharacterSearch />
                <PotterCharacterDetails />
                {/* Below is the example of Lazy loading. Meaning that first our PotterPage will be loaded and then PotterCharacter table will be fetched
                while Potter page is loading. In below chances are that we will not see the fallback because browser saves in cache. But if we click "Empty cache and hard reload
                    we will see the fallback message. At the time of this comment fallback in suspense is <h1>Its loading..........</h1>" */}
                <Suspense fallback={ <Lottie 
                                        options={defaultOptions}
                                        height={100}
                                        width={100}
                                    />}>
                    <PotterCharacterTable />
                </Suspense>
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
