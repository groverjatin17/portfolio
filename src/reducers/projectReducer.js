import {PROJECT_BACKGROUND} from '../actions/actions_info.js'

const initialState = {
  projectBackgroundImage:{}
}

export default function(state = initialState, action){
  switch (action.type) {
    case PROJECT_BACKGROUND:
      return{
        ...state,
        projectBackgroundImage:action.payload
      };
    default:
      return state
  }
}
