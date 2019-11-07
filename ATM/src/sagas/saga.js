import { all, fork, call, put, takeLatest, takeEvery, delay } from 'redux-saga/effects';
import { CHANGE_LANG_REQUEST, SET_MONEY_AMOUNT_REQUEST, DEPOSIT_MONEY_REQUEST, TRANSACTION_MSG_REQUEST, UNLOCK_NUM_KEYS_REQUEST, 
LOCK_NUM_KEYS_REQUEST } from '../actions/actionNames';
import { changeLanguage, setMoneyAmount, depositMoney, pushTransactionMsg, unlockNumericKeys, lockNumericKeys } from '../actions/actions';
import isInteger from '../helpers/isInteger';

function* dispatchChangeLanguage(action) {
    yield put(changeLanguage(action.language));
}

function* dispatchUnlockNumericKeys() {
    yield put(unlockNumericKeys());
}

function* dispatchLockNumericKeys() {
    yield put(lockNumericKeys());
}

function* dispatchMoneyAmount(action) {
    yield put(setMoneyAmount(action.amount));
}

function* dispatchDepositMoney() {
    yield put(depositMoney());
}

function* dispatchTransactionMsg(msg) {
    msg = msg instanceof Object ? msg.msg : msg; // Handle string, action object
    yield put(pushTransactionMsg(msg));
}

function* validateTransactionValueIsInteger(action) {
    const isValid = isInteger(action.amount);

    if (isValid <= 0) {
        yield call(dispatchTransactionMsg, action.language.TRANSACTION_FAIL_MINIMAL_AMOUNT);
        return;
    }

    if (isValid) {
        yield call(dispatchTransactionMsg, action.language.SUCCESS);
        yield call(dispatchDepositMoney);
        return;
    }

    yield call(dispatchTransactionMsg, action.language.TRANSACTION_FAIL);
}

/*Observers*/
function* takeEveryObserver() {
    yield takeEvery(CHANGE_LANG_REQUEST, dispatchChangeLanguage);
}

function* observeChangeMoneyAmount() {
    yield takeEvery(SET_MONEY_AMOUNT_REQUEST, dispatchMoneyAmount);
}

function* observeDepositMoneyRequest() {
    yield takeEvery(DEPOSIT_MONEY_REQUEST, validateTransactionValueIsInteger);
}

function* observeTransactionMessageChange() {
    yield takeEvery(TRANSACTION_MSG_REQUEST, dispatchTransactionMsg); 
}

function* observeNumKeysUnlock() {
    yield takeEvery(UNLOCK_NUM_KEYS_REQUEST, dispatchUnlockNumericKeys);
}

function* observeNumKeysLock() {
    yield takeEvery(LOCK_NUM_KEYS_REQUEST, dispatchLockNumericKeys);
}

export function* RootSaga() {
    yield all([
        fork(takeEveryObserver),
        fork(observeChangeMoneyAmount),
        fork(observeDepositMoneyRequest),
        fork(observeTransactionMessageChange),
        fork(observeNumKeysLock),
        fork(observeNumKeysUnlock)
    ]);
};