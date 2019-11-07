import React from 'react';
import { connect } from 'react-redux';
import { depositMoneyRequest, lockNumericKeysRequest } from '../../../actions/actions';
import { Link } from 'react-router-dom';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import constants from '../../../common/constants';

class ConfirmLeftColumn extends React.Component {
    confirm = () => {
        this.props.depositMoneyRequest(this.props.transactionMoneyAmount, this.props.language);
        this.props.lockNumericKeysRequest();
    };
    
    render = () => {
        return (
            <ButtonsColumn>
                <Link to="/balance">
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
    language: state.paymentsReducer.language
});

const mapDispatchToProps = {
    depositMoneyRequest,
    lockNumericKeysRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmLeftColumn);