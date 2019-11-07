import React from 'react';
import { Display } from '../reusable/utilityComponents';
import LanguageScreenContent from './LanguageScreenContent';
import LanguageLeftColumn from './LanguageLeftColumn';
import LanguageRightColumn from './LanguageRightColumn';

class LanguageScreen extends React.Component {
    render = () => {
        return (
            <>
                <LanguageLeftColumn />
                <Display>
                    <LanguageScreenContent />
                </Display>
                <LanguageRightColumn />
            </>
        );
    };
}

export default LanguageScreen;