import { ACTIVATE_MAIN_LAYOUT, DEACTIVATE_MAIN_LAYOUT } from './actionTypes';

export const activateMainLayout = () => {
    return {
        type: ACTIVATE_MAIN_LAYOUT,
        payload: {
            topbar: true,
            sidebar: true,
            footer: true,
            layoutType: 'Main',
        }
    }
}

export const deactivateMainLayout = () => {
    return {
        type: DEACTIVATE_MAIN_LAYOUT,
        payload: {
            topbar: false,
            sidebar: false,
            footer: false,
            layoutType: 'NonMain'
        }
    }
}