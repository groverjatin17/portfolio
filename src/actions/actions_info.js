// This file contains actions for this project
import {API_KEY} from '../styles/potterApiKey';

export const ALLALBUMS = 'ALLALBUMS';
export const ALBUMDETAILS = 'ALBUMDETAILS';
export const POTTERCHARACTERS = 'POTTERCHARACTERS';

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
  console.log('Fetching Harry Potter Characters');
  
  return function (dispatch){
    fetch(`https://www.potterapi.com/v1/characters?key=${API_KEY}`,{
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
