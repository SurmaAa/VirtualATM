import React from 'react';
import { Display } from '../reusable/utilityComponents';
import HelpScreenContent from './HelpScreenContent';
import HelpLeftColumn from './HelpLeftColumn';
import HelpRightColumn from './HelpRightColumn';

class HelpScreen extends React.Component {
    render = () => {
        return (
            <>
                <HelpLeftColumn />
                <Display>
                    <HelpScreenContent />
                </Display>
                <HelpRightColumn />
            </>
        );
    };
}

export default HelpScreen;