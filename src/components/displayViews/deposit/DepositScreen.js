import React from 'react';
import { Display } from '../reusable/utilityComponents';
import DepositScreenContent from './DepositScreenContent';
import DepositLeftColumn from './DepositLeftColumn';
import DepositRightColumn from './DepositRightColumn';

class DepositScreen extends React.Component {
    render = () => {
        return (
            <>
                <DepositLeftColumn />
                <Display>
                    <DepositScreenContent />
                </Display>
                <DepositRightColumn />
            </>
        );
    };
}

export default DepositScreen;