// This file contains actions for this project
export const ALLALBUMS = 'ALLALBUMS'
export const ALBUMDETAILS = 'ALBUMDETAILS'

// Calling an api and aving its result in a reducer
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