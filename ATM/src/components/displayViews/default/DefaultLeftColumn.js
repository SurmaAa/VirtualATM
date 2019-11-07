import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';

class DefaultLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Link to={constants.GET_WITHDRAWAL}>
                    <Button />
                </Link>
                <Link to={constants.GET_DEPOSIT}>
                    <Button />
                </Link>
                <Link to={constants.GET_BALANCE}>
                    <Button />
                </Link>
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

export default DefaultLeftColumn;