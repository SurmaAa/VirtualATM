import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';

class DefaultRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Link to={constants.GET_LANGUAGE}>
                    <Button data-test="button-column" />
                </Link>
                <Link to={constants.GET_HELP}>
                    <Button data-test="button-column" />
                </Link>
                <Button data-test="button-column" disabled buttonBlocked={true} />
            </ButtonsColumn>
        );
    };
}

export default DefaultRightColumn;