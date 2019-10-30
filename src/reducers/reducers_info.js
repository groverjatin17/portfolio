import {ALLALBUMS} from '../actions/actions_info.js'
import {ALBUMDETAILS} from '../actions/actions_info.js'


const initialState = {
  allAlbums:[],
  albumDetails:[]
}

export default function(state = initialState, action){
  switch (action.type) {
    case ALLALBUMS:
      return{
        ...state,
        allAlbums:action.payload
      };
    case ALBUMDETAILS:
      return{
        ...state,
        albumDetails:action.payload
      };

    default:
      return state
  }
}
