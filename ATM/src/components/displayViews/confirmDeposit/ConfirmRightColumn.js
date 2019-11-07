import React from 'react';
import { connect } from 'react-redux';
import { lockNumericKeysRequest } from '../../../actions/actions';
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
                <Link to={constants.GET_DEPOSIT}>
                    <Button onClick={() => this.props.lockNumericKeysRequest()} />
                </Link>
            </ButtonsColumn>
        );
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    lockNumericKeysRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmRightColumn);