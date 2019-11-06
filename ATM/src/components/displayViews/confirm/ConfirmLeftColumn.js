import React from 'react';
import { connect } from 'react-redux';
import { depositMoneyRequest } from '../../../actions/actions';
import { Link } from 'react-router-dom';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import constants from '../../../common/constants';

class ConfirmLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to="/balance">
                    <Button onClick={() => this.props.depositMoneyRequest(this.props.transactionMoneyAmount, this.props.language)} />
                </Link>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

const mapStateToProps = state => ({
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount,
    language: state.paymentsReducer.language
});

const mapDispatchToProps = {
    depositMoneyRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmLeftColumn);