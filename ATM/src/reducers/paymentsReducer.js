import {
    CHANGE_VIEW
} from '../actions/actionNames';
import initialState from '../state/initialState';

const paymentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.view
            };
        default:
            return state;
    }
};

export default paymentsReducer
