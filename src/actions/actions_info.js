// This file contains actions for this project
import {POTTER_API_KEY, UNSPLASH_API_KEY} from '../styles/apiKeys';

export const ALLALBUMS = 'ALLALBUMS';
export const ALBUMDETAILS = 'ALBUMDETAILS';
export const POTTERCHARACTERS = 'POTTERCHARACTERS';
export const RANDOM_IMAGE = 'RANDOM_IMAGE';
export const SEARCHED_IMAGES = 'SEARCHED_IMAGES';
export const SEARCH_QUERY = 'SEARCH_QUERY';

// Calling an api and saving its result in a reducer
export function getAlbums(){
  return function (dispatch){
    fetch('https://jsonplaceholder.typicode.com/albums',{
      method:'GET'})
    .then(response => response.json())
    .then(json =>{
      dispatch({
        type:ALLALBUMS,
        payload:json
      })
    }).catch(console.error())
  }
}

export function getAlbumDetails(albumId){
  return function (dispatch){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId,{
      method:'GET'})
    .then(response => response.json())
    .then(json =>{
      dispatch({
        type:ALBUMDETAILS,
        payload:json
      })
    }).catch(console.error())
  }
}


export function getHarryPotterCharacters(){
  return function (dispatch){
    fetch(`https://www.potterapi.com/v1/characters?key=${POTTER_API_KEY}`,{
      method:'GET'})
    .then(response => response.json())
    .then(json =>{
      dispatch({
        type:POTTERCHARACTERS,
        payload:json
      })
    }).catch(console.error())
  }
}

export function getRandomImage(){
  return function (dispatch){
    fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&orientation=landscape`,{
      method:'GET'})
    .then(response => response.json())
    .then(json =>{
      dispatch({
        type:RANDOM_IMAGE,
        payload:json
      })
    }).catch(console.error())
  }
}

export function getImagesOnSearch(query, page){
  return function (dispatch){
    fetch(`https://api.unsplash.com/search/photos?client_id=${UNSPLASH_API_KEY}`
    +`&query=${query}`
    +`&page=${page}`
    +`&per_page=9`
    +`&orientation=landscape`,{
      method:'GET'})
    .then(response => response.json())
    .then(json =>{
      dispatch({
        type:SEARCHED_IMAGES,
        payload:json
      })
    }).catch(console.error())
  }
}

export function saveSearchQuery(searchValue){
  return function (dispatch){
      dispatch({
        type:SEARCH_QUERY,
        payload:searchValue
      })
  }
}