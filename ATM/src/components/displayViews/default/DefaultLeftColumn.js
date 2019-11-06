import React from 'react';
import { connect } from 'react-redux';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';

class DefaultLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to="/withdrawal">
                    <Button />
                </Link>
                <Link to="/deposit">
                    <Button />
                </Link>
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

export default connect(mapStateToProps)(DefaultLeftColumn);