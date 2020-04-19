import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

import {Tab} from 'semantic-ui-react';
import _ from 'lodash';

import {getImagesOnSearch, saveSearchQuery, getRandomImage} from '../../actions/actions_info';
import SearchImages from './SearchImages';
import RandomWallpaper from './RandomWallpaper';
import PinkLoader from '../common/components/PinkLoader';
import NavigationBar from '../NavigationBar';

function UnsplashMainView(props) {
  
    const {searchQuery, searchedImages, randomImage, saveSearch, fetchImages} = props;

    useEffect(() => {
        fetchImages(searchQuery, 1);
    }, [fetchImages, searchQuery])
    
    let randomImageObject = {};
    if(_.isEmpty(randomImage)) {
    } else {
        randomImageObject.imageUrl = randomImage.urls.regular;
        randomImageObject.imageId = randomImage.id;
        randomImageObject.title = randomImage.description;
        randomImageObject.photographer = randomImage.user.name;
        randomImageObject.views = randomImage.views;
        randomImageObject.downloads = randomImage.downloads;
    }
    
    const handleTabChange = (e, {activeIndex}) => {
    if ( activeIndex === 1) {
        props.getImage()
    }
    }

    const panes = [
    {
        menuItem: { key: 'searchImage', 
                    icon: 'images outline', 
                    content: <FormattedMessage
                                id='images.searchImages'
                                defaultMessage='Search Images'
                            /> 
},
        render: () => (<Tab.Pane>
                        <SearchImages 
                            searchedImages={searchedImages} 
                            saveSearch={saveSearch}
                        />
                    </Tab.Pane>)
    },
    {
        menuItem: { key: 'RandomWallpaper', 
                    icon: 'file image', 
                    content: <FormattedMessage
                                id='images.myNextWallpaper'
                                defaultMessage='My Next Wallpaper'
                            /> 
                },
        render: () => <Tab.Pane>
                        { _.isEmpty(randomImage) ? 
                        <PinkLoader /> : 
                        <RandomWallpaper randomImageObject={randomImageObject} />
                        }
                    </Tab.Pane>
    },
    ]

    return (
        <div>
            <NavigationBar theme= 'dark' />
            <br />
            <Tab panes={panes} 
            onTabChange={handleTabChange}
            />
        </div>
    )
}

const mapStateToProps = ({unsplashReducer}) => ({
    searchedImages: unsplashReducer.searchedImages,
    searchQuery: unsplashReducer.searchQuery,
    randomImage: unsplashReducer.randomImage
})

const mapDispatchToProps = dispatch => {
    return {
        fetchImages: (query, page) => dispatch(getImagesOnSearch(query, page)),
        saveSearch: (value) => dispatch(saveSearchQuery(value)),
        getImage: () => dispatch(getRandomImage())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps) (withRouter(UnsplashMainView));
