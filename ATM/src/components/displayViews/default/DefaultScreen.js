import React from 'react';
import { Display } from '../reusable/utilityComponents';
import DefaultScreenContent from './DefaultScreenContent';
import DefaultLeftColumn from './DefaultLeftColumn';
import DefaultRightColumn from './DefaultRightColumn';

class DefaultScreen extends React.Component {
    render = () => {
        return (
            <>
                <DefaultLeftColumn />
                <Display>
                    <DefaultScreenContent />
                </Display>
                <DefaultRightColumn />
            </>
        );
    };
}

export default DefaultScreen;