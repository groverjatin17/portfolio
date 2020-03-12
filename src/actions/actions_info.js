// This file contains actions for this project
import {POTTER_API_KEY} from '../styles/apiKeys';
import {UNSPLASH_API_KEY} from '../styles/apiKeys';

export const ALLALBUMS = 'ALLALBUMS';
export const ALBUMDETAILS = 'ALBUMDETAILS';
export const POTTERCHARACTERS = 'POTTERCHARACTERS';
export const PROJECT_BACKGROUND = 'PROJECT_BACKGROUND';

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

export function getRandomTechImage(){
  console.log('Fetching an Image');
  
  return function (dispatch){
    fetch(`https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&collections=335434`,{
      method:'GET'})
    .then(response => response.json())
    .then(json =>{
      dispatch({
        type:PROJECT_BACKGROUND,
        payload:json
      })
    }).catch(console.error())
  }
}