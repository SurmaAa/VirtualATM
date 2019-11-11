import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class WithdrawalLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_CONFIRM_WITHDRAWAL}>
                    <Button data-test="button-column" onClick={() => this.props.setMoneyAmountRequest(20)} />
                </Link>
                <Link to={constants.GET_CONFIRM_WITHDRAWAL}>
                    <Button data-test="button-column" onClick={() => this.props.setMoneyAmountRequest(50)} />
                </Link>
                <Link to={constants.GET_CONFIRM_WITHDRAWAL}>
                    <Button data-test="button-column" onClick={() => this.props.setMoneyAmountRequest(100)} />
                </Link>
                <Link to={constants.GET_CONFIRM_WITHDRAWAL}>
                    <Button data-test="button-column" onClick={() => this.props.setMoneyAmountRequest(200)} />
                </Link>
            </ButtonsColumn >
        );
    };
}

WithdrawalLeftColumn.propTypes = {
    setMoneyAmountRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalLeftColumn);