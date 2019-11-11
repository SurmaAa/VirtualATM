import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';

class HelpLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button data-test="button-column-1" disabled buttonBlocked={true} />
                <Button data-test="button-column-2" disabled buttonBlocked={true} />
                <Button data-test="button-column-3" disabled buttonBlocked={true} />
                <Button data-test="button-column-4" disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

export default HelpLeftColumn;