import React from 'react';
import { connect } from 'react-redux';
import { depositMoneyRequest, lockNumericKeysRequest } from '../../../actions/actions';
import { Link } from 'react-router-dom';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class ConfirmLeftColumn extends React.Component {
    confirm = () => {
        this.props.depositMoneyRequest(this.props.transactionMoneyAmount, this.props.language);
        this.props.lockNumericKeysRequest();
    };

    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_BALANCE}>
                    <Button data-test="button-column" onClick={() => this.confirm()} />
                </Link>
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

ConfirmLeftColumn.propTypes = {
    language: PropTypes.object.isRequired,
    transactionMoneyAmount: PropTypes.number.isRequired,
    depositMoneyRequest: PropTypes.func.isRequired,
    lockNumericKeysRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount,
    language: state.paymentsReducer.language
});

const mapDispatchToProps = {
    depositMoneyRequest,
    lockNumericKeysRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmLeftColumn);