import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class DepositLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_CONFIRM_DEPOSIT}>
                    <Button onClick={() => this.props.setMoneyAmountRequest(20)} />
                </Link>
                <Link to={constants.GET_CONFIRM_DEPOSIT}>
                    <Button onClick={() => this.props.setMoneyAmountRequest(50)} />
                </Link>
                <Link to={constants.GET_CONFIRM_DEPOSIT}>
                    <Button onClick={() => this.props.setMoneyAmountRequest(100)} />
                </Link>
                <Link to={constants.GET_CONFIRM_DEPOSIT}>
                    <Button onClick={() => this.props.setMoneyAmountRequest(200)} />
                </Link>
            </ButtonsColumn >
        );
    };
}

DepositLeftColumn.propTypes = {
    setMoneyAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositLeftColumn);