import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {Tab} from 'semantic-ui-react';
import _ from 'lodash';

import {getImagesOnSearch, saveSearchQuery, getRandomImage} from '../../actions/actions_info';
import SearchImages from './SearchImages';
import PinkLoader from '../common/components/PinkLoader';

function UnsplashMainView(props) {
  
    const {searchQuery, searchedImages, randomImage, saveSearch} = props;

    useEffect(() => {
        props.fetchImages(searchQuery, 1)
    }, [props.searchQuery])
    
    let randomImageUrl = '';
    if(_.isEmpty(randomImage)) {
    } else {
        randomImageUrl = randomImage.urls.regular;
    }
    
    const handleTabChange = (e, {activeIndex}) => {
    if ( activeIndex === 1) {
        props.getImage()
    }
    }

      const panes = [
        {
          menuItem: { key: 'searchImage', icon: 'images outline', content: 'Search Images' },
          render: () => (<Tab.Pane>
                            <SearchImages 
                                searchedImages={searchedImages} 
                                saveSearch={saveSearch}
                            />
                        </Tab.Pane>)
        },
        {
          menuItem: { key: 'RandomWallpaper', icon: 'file image', content: 'My  Next Wallpaper' },
          render: () => <Tab.Pane>
                            { _.isEmpty(randomImage) ? <PinkLoader /> : <img src={randomImageUrl} alt='background' /> }
                        </Tab.Pane>
        },
      ]

    return (
        <div>
            <Tab panes={panes} 
            onTabChange={handleTabChange} 
            />
        </div>
    )
}

const mapStateToProps = state => ({
    searchedImages: state.unsplashReducer.searchedImages,
    searchQuery: state.unsplashReducer.searchQuery,
    randomImage: state.unsplashReducer.randomImage
})

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: (query, page) => dispatch(getImagesOnSearch(query, page)),
        saveSearch: (value) => dispatch(saveSearchQuery(value)),
        getImage: () => dispatch(getRandomImage())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(UnsplashMainView));
