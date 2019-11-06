import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';

class ConfirmRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to="/">
                    <Button />
                </Link>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Link to="/deposit">
                    <Button />
                </Link>
            </ButtonsColumn>
        );
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmRightColumn);