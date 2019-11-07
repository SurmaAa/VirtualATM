import React from 'react';
import { connect } from 'react-redux';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import { pushTransactionMsgRequest } from '../../../actions/actions';
import constants from '../../../common/constants';

class BalanceRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Link to={constants.GET_HOMEPAGE}>
                    <Button onClick={() => this.props.pushTransactionMsgRequest()} />
                </Link>
            </ButtonsColumn>
        );
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    pushTransactionMsgRequest
};
export default connect(mapStateToProps, mapDispatchToProps)(BalanceRightColumn);