import React from 'react';
import { connect } from 'react-redux';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';

class BalanceLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

const mapStateToProps = state => ({
    view: state.paymentsReducer.view
});

export default connect(mapStateToProps)(BalanceLeftColumn);