import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';

class DefaultRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button data-test="button-column-1" disabled buttonBlocked={true} />
                <Link to={constants.GET_LANGUAGE}>
                    <Button data-test="button-column-2" />
                </Link>
                <Link to={constants.GET_HELP}>
                    <Button data-test="button-column-3" />
                </Link>
                <Button data-test="button-column-4" disabled buttonBlocked={true} />
            </ButtonsColumn>
        );
    };
}

export default DefaultRightColumn;