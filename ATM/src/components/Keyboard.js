import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { depositMoneyRequest, setMoneyAmountRequest } from '../actions/actions';
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
            history.push('/');
        }
    };

    confirmTransaction = () => {
        if (window.location.pathname === "/confirm") {
            this.props.depositMoneyRequest(this.props.transactionMoneyAmount, this.props.language);
            history.push('/balance');
        }
    };

    clearInput = () => {
        if (window.location.pathname === "/confirm") {
            this.props.setMoneyAmountRequest(0);
        }
    };

    render = () => {
        return (
            <KeyboardContainer>
                <Keys>
                    <KeysRow>
                        <Button margin={true}>1</Button>
                        <Button margin={true}>2</Button>
                        <Button margin={true}>3</Button>
                        <Button onClick={() => this.confirmTransaction()} wide={true} bgColor={"#07ff53;"} margin={true}>{this.props.language.CONFIRM}</Button>
                    </KeysRow>
                    <KeysRow>
                        <Button margin={true}>4</Button>
                        <Button margin={true}>5</Button>
                        <Button margin={true}>6</Button>
                        <Button onClick={() => this.clearInput()} wide={true} bgColor={"#ffeb3b"} margin={true}>{this.props.language.CLEAR}</Button>
                    </KeysRow>
                    <KeysRow>
                        <Button margin={true}>7</Button>
                        <Button margin={true}>8</Button>
                        <Button margin={true}>9</Button>
                        <Button onClick={() => this.cancelTransaction()} wide={true} bgColor={"#f10b3a"} margin={true}>{this.props.language.CANCEL}</Button>
                    </KeysRow>
                </Keys>
            </KeyboardContainer>
        );
    };
}

const mapStateToProps = state => ({
    view: state.paymentsReducer.view,
    language: state.paymentsReducer.language,
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount
});

const mapDispatchToProps = {
    depositMoneyRequest,
    setMoneyAmountRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);