import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class DepositRightColumn extends React.Component {
    customAmount = () => {
        this.props.setMoneyAmountRequest(0);
    };

    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_CONFIRM_DEPOSIT}>
                    <Button data-test="button-column" onClick={() => this.props.setMoneyAmountRequest(500)} />
                </Link>
                <Link to={constants.GET_CONFIRM_DEPOSIT}>
                    <Button data-test="button-column" onClick={() => this.customAmount()} />
                </Link>
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Link to={constants.GET_HOMEPAGE}>
                    <Button data-test="button-column" />
                </Link>
            </ButtonsColumn>
        );
    };
}

DepositRightColumn.propTypes = {
    setMoneyAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositRightColumn);