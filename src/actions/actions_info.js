// This file contains actions for this project

export const LOCALE = 'LOCALE';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const POTTERCHARACTERS = 'POTTERCHARACTERS';
export const RANDOM_IMAGE = 'RANDOM_IMAGE';
export const SEARCHED_IMAGES = 'SEARCHED_IMAGES';
export const SEARCH_QUERY = 'SEARCH_QUERY';
export const MEDIA_DEVICE = 'MEDIA_DEVICE';

export function setLocale(value) {
    return function (dispatch) {
        dispatch({
            type: LOCALE,
            payload: value,
        });
    };
}

export function toggleSidebar() {
    return function (dispatch) {
        dispatch({
            type: TOGGLE_SIDEBAR,
        });
    };
}

export function setMediaDevice(device) {
    return function (dispatch) {
        dispatch({
            type: MEDIA_DEVICE,
            payload: device,
        });
    };
}
export function getHarryPotterCharacters() {
    return function (dispatch) {
        console.log('potterapikey', process.env);

        fetch(
            `https://www.potterapi.com/v1/characters?key=$2a$10$FAmRL8kl${process.env.REACT_APP_POTTER_API_KEY}`,
            {
                method: 'GET',
            }
        )
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: POTTERCHARACTERS,
                    payload: { loading: false, data: json },
                });
            })
            .catch(console.error());
    };
}

export function getRandomImage() {
    return function (dispatch) {
        fetch(
            `https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&orientation=landscape`,
            {
                method: 'GET',
            }
        )
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: RANDOM_IMAGE,
                    payload: json,
                });
            })
            .catch(console.error());
    };
}

export function getImagesOnSearch(query, page) {
    return function (dispatch) {
        fetch(
            `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}` +
                `&query=${query}` +
                `&page=${page}` +
                `&per_page=9` +
                `&orientation=landscape`,
            {
                method: 'GET',
            }
        )
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: SEARCHED_IMAGES,
                    payload: json,
                });
            })
            .catch(console.error());
    };
}

export function saveSearchQuery(searchValue) {
    return function (dispatch) {
        dispatch({
            type: SEARCH_QUERY,
            payload: searchValue,
        });
    };
}
