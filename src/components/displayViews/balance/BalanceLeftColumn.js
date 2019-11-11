import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';

class BalanceLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
                <Button data-test="button-column" disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

export default BalanceLeftColumn;