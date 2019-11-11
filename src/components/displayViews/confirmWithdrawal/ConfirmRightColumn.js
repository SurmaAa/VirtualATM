import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest, lockNumericKeysRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class ConfirmRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_HOMEPAGE}>
                    <Button data-test="button-column" onClick={() => this.props.lockNumericKeysRequest()} />
                </Link>
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Link to={constants.GET_WITHDRAWAL}>
                    <Button data-test="button-column" onClick={() => this.props.lockNumericKeysRequest()} />
                </Link>
            </ButtonsColumn>
        );
    };
}

ConfirmRightColumn.propTypes = {
    lockNumericKeysRequest: PropTypes.func.isRequired,
    setMoneyAmountRequest: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest,
    lockNumericKeysRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmRightColumn);