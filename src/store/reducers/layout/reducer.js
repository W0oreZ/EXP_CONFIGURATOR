import { ACTIVATE_MAIN_LAYOUT, DEACTIVATE_MAIN_LAYOUT } from './actionTypes';

const initialState = {
    topbar: true,
    sidebar: true,
    footer: true,
    headerComponent: null
}

const layout = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVATE_MAIN_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case DEACTIVATE_MAIN_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default layout;