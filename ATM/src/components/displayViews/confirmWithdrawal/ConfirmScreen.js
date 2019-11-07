import React from 'react';
import { Display } from '../reusable/utilityComponents';
import ConfirmScreenContent from './ConfirmScreenContent';
import ConfirmLeftColumn from './ConfirmLeftColumn';
import ConfirmRightColumn from './ConfirmRightColumn';

class ConfirmScreen extends React.Component {
    render = () => {
        return (
            <>
                <ConfirmLeftColumn />
                <Display>
                    <ConfirmScreenContent />
                </Display>
                <ConfirmRightColumn />
            </>
        );
    };
}

export default ConfirmScreen;