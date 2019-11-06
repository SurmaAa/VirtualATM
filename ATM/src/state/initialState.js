import languageEn from '../language/languageEN';

const initialState = {
    balance: 2315,
    transactionMsg: "",
    transactionMoneyAmount: 0,
    language: {
        ...languageEn
    }
};

export default initialState;