import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { depositMoneyRequest, setMoneyAmountRequest, unlockNumericKeysRequest, lockNumericKeysRequest, withdrawMoneyRequest } from '../actions/actions';
import { Button } from './displayViews/reusable/utilityComponents';
import history from '../common/history';
import constants from '../common/constants';
import { colors } from '../css/cssSimpleTheme';

const KeyboardContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${colors.CASE};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    flex: 1;
`;
const Keys = styled.div`
    background-color: ${colors.KEYBOARD};
    border-radius: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    display: inline-table;
`;

const KeysRow = styled.div`
    display: flex;
`;

class Keyboard extends React.Component {
    cancelTransaction = () => {
        if (window.location.pathname.includes(constants.GET_CONFIRM)) {
            this.props.lockNumericKeysRequest();
            history.push(constants.GET_HOMEPAGE);
        }
    };

    confirmTransaction = () => {
        if (window.location.pathname === constants.GET_CONFIRM_DEPOSIT) {
            this.props.depositMoneyRequest(this.props.transactionMoneyAmount, this.props.language);
            this.props.lockNumericKeysRequest();
            history.push(constants.GET_BALANCE);
        }

        if (window.location.pathname === constants.GET_CONFIRM_WITHDRAWAL) {
            this.props.withdrawMoneyRequest(this.props.transactionMoneyAmount, this.props.language, this.props.balance);
            this.props.lockNumericKeysRequest();
            history.push(constants.GET_BALANCE);
        }
    };

    clearInput = () => {
        if (window.location.pathname.includes(constants.GET_CONFIRM) && !this.props.numKeysLocked) {
            this.props.setMoneyAmountRequest(0);
        }
    };

    setTransactionMoneyAmount = (number) => {
        //don't have to check location pathname like above
        if (this.props.numKeysLocked && this.props.transactionMoneyAmount !== 0) return;
        this.props.unlockNumericKeysRequest();
        //1 + 2 = 12, 
        //0 + 2 = 2
        const amount = this.props.transactionMoneyAmount ? parseInt(this.props.transactionMoneyAmount + number.toString()) : number;
        this.props.setMoneyAmountRequest(amount);
    };

    render = () => {
        return (
            <KeyboardContainer>
                <Keys>
                    <KeysRow>
                        <Button onClick={() => this.setTransactionMoneyAmount(1)} margin={true}>1</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(2)} margin={true}>2</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(3)} margin={true}>3</Button>
                        <Button onClick={() => this.confirmTransaction()} wide={true} bgColor={colors.BUTTON_CONFIRM} margin={true}>{this.props.language.CONFIRM}</Button>
                    </KeysRow>
                    <KeysRow>
                        <Button onClick={() => this.setTransactionMoneyAmount(4)} margin={true}>4</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(5)} margin={true}>5</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(6)} margin={true}>6</Button>
                        <Button onClick={() => this.clearInput()} wide={true} bgColor={colors.BUTTON_CLEAR} margin={true}>{this.props.language.CLEAR}</Button>
                    </KeysRow>
                    <KeysRow>
                        <Button onClick={() => this.setTransactionMoneyAmount(7)} margin={true}>7</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(8)} margin={true}>8</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(9)} margin={true}>9</Button>
                        <Button onClick={() => this.cancelTransaction()} wide={true} bgColor={colors.BUTTON_CANCEL} margin={true}>{this.props.language.CANCEL}</Button>
                    </KeysRow>
                    <KeysRow>
                        <Button onClick={() => this.setTransactionMoneyAmount(0)} margin={true}>0</Button>
                        <Button margin={true}></Button>
                        <Button margin={true}></Button>
                        <Button wide={true} margin={true}></Button>
                    </KeysRow>
                </Keys>
            </KeyboardContainer>
        );
    };
}

Keyboard.propTypes = {
    language: PropTypes.object.isRequired,
    transactionMoneyAmount: PropTypes.number.isRequired,
    numKeysLocked: PropTypes.bool.isRequired,
    balance: PropTypes.number.isRequired,
    depositMoneyRequest: PropTypes.func.isRequired,
    setMoneyAmountRequest: PropTypes.func.isRequired,
    unlockNumericKeysRequest: PropTypes.func.isRequired,
    lockNumericKeysRequest: PropTypes.func.isRequired,
    withdrawMoneyRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    language: state.paymentsReducer.language,
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount,
    numKeysLocked: state.paymentsReducer.numKeysLocked,
    balance: state.paymentsReducer.balance
});

const mapDispatchToProps = {
    depositMoneyRequest,
    setMoneyAmountRequest,
    unlockNumericKeysRequest,
    lockNumericKeysRequest,
    withdrawMoneyRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);