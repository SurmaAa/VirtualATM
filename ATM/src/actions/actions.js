import { CHANGE_VIEW_REQUEST, CHANGE_VIEW } from './actionNames';

const changeViewRequest = (view) => {
    return {
        type: CHANGE_VIEW_REQUEST,
        view
    }
};

const changeView = (view) => {
    return {
        type: CHANGE_VIEW,
        view
    }
};

export {
    changeViewRequest,
    changeView
}