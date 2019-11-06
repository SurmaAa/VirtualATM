import React from 'react';
import { connect } from 'react-redux';
import { setMoneyAmountRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';

class DepositLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to="/confirm">
                    <Button onClick={() => this.props.setMoneyAmountRequest(20)} />
                </Link>
                <Link to="/confirm">
                    <Button onClick={() => this.props.setMoneyAmountRequest(50)} />
                </Link>
                <Link to="/confirm">
                    <Button onClick={() => this.props.setMoneyAmountRequest(100)} />
                </Link>
                <Link to="/confirm">
                    <Button onClick={() => this.props.setMoneyAmountRequest(200)} />
                </Link>
            </ButtonsColumn >
        );
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    setMoneyAmountRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositLeftColumn);