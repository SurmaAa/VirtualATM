import React from 'react';
import { connect } from 'react-redux';
import { changeViewRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';

class DefaultRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button disabled buttonBlocked={true} />
                <Button />
                <Button />
                <Button />
            </ButtonsColumn>
        );
    };
}

const mapStateToProps = state => ({
    view: state.paymentsReducer.view
});

const mapDispatchToProps = {
    changeViewRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultRightColumn);