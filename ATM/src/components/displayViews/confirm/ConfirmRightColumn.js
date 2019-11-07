import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest, lockNumericKeysRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';

class ConfirmRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to="/">
                    <Button onClick={() => this.props.lockNumericKeysRequest()} />
                </Link>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Link to="/deposit">
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