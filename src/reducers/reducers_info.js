import { LOCALE, TOGGLE_SIDEBAR } from '../actions/actions_info.js';

const initialState = {
    locale: 'en-US',
    showHideSidebar: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOCALE:
            return {
                ...state,
                locale: action.payload,
            };
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                showHideSidebar: !state.showHideSidebar,
            };
        default:
            return state;
    }
}
