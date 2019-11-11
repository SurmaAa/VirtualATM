import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';

class DefaultLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_WITHDRAWAL}>
                    <Button data-test="button-column" />
                </Link>
                <Link to={constants.GET_DEPOSIT}>
                    <Button data-test="button-column" />
                </Link>
                <Link to={constants.GET_BALANCE}>
                    <Button data-test="button-column" />
                </Link>
                <Button data-test="button-column" disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

export default DefaultLeftColumn;