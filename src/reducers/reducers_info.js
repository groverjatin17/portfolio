import { LOCALE } from '../actions/actions_info.js';

const initialState = {
    locale: 'en-US',
    albumDetails: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOCALE:
            return {
                ...state,
                locale: action.payload,
            };
        default:
            return state;
    }
}
