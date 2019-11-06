import React from 'react';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import { Link } from 'react-router-dom';

class HelpRightColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
                <Link to="/"><Button /></Link>
            </ButtonsColumn>
        );
    };
}

export default HelpRightColumn;