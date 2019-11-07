import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest, lockNumericKeysRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';

class ConfirmRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_HOMEPAGE}>
                    <Button onClick={() => this.props.lockNumericKeysRequest()} />
                </Link>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Link to={constants.GET_WITHDRAWAL}>
                    <Button onClick={() => this.props.lockNumericKeysRequest()} />
                </Link>
            </ButtonsColumn>
        );
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest,
    lockNumericKeysRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmRightColumn);