import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { depositMoneyRequest, setMoneyAmountRequest, unlockNumericKeysRequest, lockNumericKeysRequest } from '../actions/actions';
import { Button } from './displayViews/reusable/utilityComponents';
import history from '../common/history';

const KeyboardContainer = styled.div`
    display: flex;
    width: 40vw;
    background-color: #224369;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    @media (max-width: 1500px) {
        width: 80vw;
    }
    @media (max-width: 700px) {
        width: 95vw;
    }
`;
const Keys = styled.div`
    background-color: #14283e;
    border-radius: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
`;

const KeysRow = styled.div`
    display: flex;
`;

class Keyboard extends React.Component {
    cancelTransaction = () => {
        if (window.location.pathname === "/confirm") {
            this.props.lockNumericKeysRequest();
            history.push('/');
        }
    };

    confirmTransaction = () => {
        if (window.location.pathname === "/confirm") {
            this.props.depositMoneyRequest(this.props.transactionMoneyAmount, this.props.language);
            this.props.lockNumericKeysRequest();
            history.push('/balance');
        }
    };

    clearInput = () => {
        if (window.location.pathname === "/confirm" && !this.props.numKeysLocked) {
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
                        <Button onClick={() => this.confirmTransaction()} wide={true} bgColor={"#07ff53;"} margin={true}>{this.props.language.CONFIRM}</Button>
                    </KeysRow>
                    <KeysRow>
                        <Button onClick={() => this.setTransactionMoneyAmount(4)} margin={true}>4</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(5)} margin={true}>5</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(6)} margin={true}>6</Button>
                        <Button onClick={() => this.clearInput()} wide={true} bgColor={"#ffeb3b"} margin={true}>{this.props.language.CLEAR}</Button>
                    </KeysRow>
                    <KeysRow>
                        <Button onClick={() => this.setTransactionMoneyAmount(7)} margin={true}>7</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(8)} margin={true}>8</Button>
                        <Button onClick={() => this.setTransactionMoneyAmount(9)} margin={true}>9</Button>
                        <Button onClick={() => this.cancelTransaction()} wide={true} bgColor={"#f10b3a"} margin={true}>{this.props.language.CANCEL}</Button>
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

const mapStateToProps = state => ({
    view: state.paymentsReducer.view,
    language: state.paymentsReducer.language,
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount,
    numKeysLocked: state.paymentsReducer.numKeysLocked
});

const mapDispatchToProps = {
    depositMoneyRequest,
    setMoneyAmountRequest,
    unlockNumericKeysRequest,
    lockNumericKeysRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);