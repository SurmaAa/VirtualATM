import {
    CHANGE_LANG, SET_MONEY_AMOUNT, DEPOSIT_MONEY, TRANSACTION_MSG
} from '../actions/actionNames';
import constants from '../common/constants';
import languageEn from '../language/languageEN';
import languagePl from '../language/languagePL';
import initialState from '../state/initialState';

const paymentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANG:
            const lang = action.language === constants.LANG_EN ? languageEn : languagePl; 
            return {
                ...state,
                language: {
                    ...lang
                }
            };
        case SET_MONEY_AMOUNT:
            return {
                ...state,
                transactionMoneyAmount: action.amount
            };
        case DEPOSIT_MONEY:
            return {
                ...state,
                balance: state.balance + state.transactionMoneyAmount
            };
        case TRANSACTION_MSG:
            return {
                ...state,
                transactionMsg: action.msg
            };
        default:
            return state;
    }
};

export default paymentsReducer
