import React from 'react';
import { connect } from 'react-redux';
import { changeViewRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';

class DefaultLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button onClick={() => this.props.changeViewRequest("CHUJ")} />
                <Button />
                <Link to="/balance">
                    <Button />
                </Link>
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn >
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