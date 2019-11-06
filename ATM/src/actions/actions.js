import { CHANGE_LANG_REQUEST, CHANGE_LANG, SET_MONEY_AMOUNT_REQUEST, SET_MONEY_AMOUNT, DEPOSIT_MONEY_REQUEST, DEPOSIT_MONEY, TRANSACTION_MSG, TRANSACTION_MSG_REQUEST } from './actionNames';

const changeLanguageRequest = (language) => {
    return {
        type: CHANGE_LANG_REQUEST,
        language
    };
};

const changeLanguage = (language) => {
    return {
        type: CHANGE_LANG,
        language
    };
};

const setMoneyAmountRequest = (amount) => {
    return {
        type: SET_MONEY_AMOUNT_REQUEST,
        amount
    }
};

const setMoneyAmount = (amount) => {
    return {
        type: SET_MONEY_AMOUNT,
        amount
    };
};

const depositMoneyRequest = (amount, language)  => {
    return {
        type: DEPOSIT_MONEY_REQUEST,
        amount,
        language
    };
};

const depositMoney = ()  => {
    return {
        type: DEPOSIT_MONEY,
    };
};

const pushTransactionMsgRequest = (msg) => {
    return {
        type: TRANSACTION_MSG_REQUEST,
        msg
    };
};

const pushTransactionMsg = (msg = "") => {
    return {
        type: TRANSACTION_MSG,
        msg
    };
};

export {
    depositMoneyRequest,
    depositMoney,
    setMoneyAmountRequest,
    setMoneyAmount,
    changeLanguageRequest,
    changeLanguage,
    pushTransactionMsgRequest,
    pushTransactionMsg,
}