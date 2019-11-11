import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';
import constants from '../../../common/constants';

class HelpRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button data-test="button-column-1" disabled buttonBlocked={true} />
                <Button data-test="button-column-2" disabled buttonBlocked={true} />
                <Button data-test="button-column-3" disabled buttonBlocked={true} />
                <Link to={constants.GET_HOMEPAGE}>
                    <Button data-test="button-column-4" />
                </Link>
            </ButtonsColumn>
        );
    };
}

export default HelpRightColumn;