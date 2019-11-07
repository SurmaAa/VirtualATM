import React from 'react';
import { connect } from 'react-redux';
import { withdrawMoneyRequest, lockNumericKeysRequest } from '../../../actions/actions';
import { Link } from 'react-router-dom';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import constants from '../../../common/constants';

class ConfirmLeftColumn extends React.Component {
    confirm = () => {
        this.props.withdrawMoneyRequest(this.props.transactionMoneyAmount, this.props.language, this.props.balance);
        this.props.lockNumericKeysRequest();
    };
    
    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_BALANCE}>
                    <Button onClick={() => this.confirm()} />
                </Link>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

const mapStateToProps = state => ({
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount,
    language: state.paymentsReducer.language,
    balance: state.paymentsReducer.balance
});

const mapDispatchToProps = {
    withdrawMoneyRequest,
    lockNumericKeysRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmLeftColumn);