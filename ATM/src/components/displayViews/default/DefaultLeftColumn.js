import React from 'react';
import { connect } from 'react-redux';
import { changeViewRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';

class DefaultLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button onClick={() => this.props.changeViewRequest("CHUJ")} />
                <Button />
                <Button />
                <Button disabled buttonBlocked={true} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLeftColumn);