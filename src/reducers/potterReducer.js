import {POTTERCHARACTERS} from '../actions/actions_info.js'

const initialState = {
  potterCharacters:[]
}

export default function(state = initialState, action){
  switch (action.type) {
    case POTTERCHARACTERS:
      return{
        ...state,
        potterCharacters:action.payload
      };
    default:
      return state
  }
}
