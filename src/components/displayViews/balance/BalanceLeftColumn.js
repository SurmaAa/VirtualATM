import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';

class BalanceLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

export default BalanceLeftColumn;