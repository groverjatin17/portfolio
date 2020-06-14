import {
    LOCALE,
    TOGGLE_SIDEBAR,
    MEDIA_DEVICE,
} from '../actions/actions_info.js';

const initialState = {
    locale: 'en-US',
    showHideSidebar: false,
    mediaDevice: '',
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
        case MEDIA_DEVICE:
            return {
                ...state,
                mediaDevice: action.payload,
            };
        default:
            return state;
    }
}
