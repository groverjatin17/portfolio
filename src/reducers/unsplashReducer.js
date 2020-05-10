import {
    RANDOM_IMAGE,
    SEARCHED_IMAGES,
    SEARCH_QUERY,
} from '../actions/actions_info.js';

const initialState = {
    randomImage: {},
    searchedImages: {},
    searchQuery: 'pen',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RANDOM_IMAGE:
            return {
                ...state,
                randomImage: action.payload,
            };
        case SEARCHED_IMAGES:
            return {
                ...state,
                searchedImages: action.payload,
            };
        case SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };
        default:
            return state;
    }
}
