import React from 'react';
import { Display } from '../reusable/utilityComponents';
import BalanceScreenContent from './BalanceScreenContent';
import BalanceLeftColumn from './BalanceLeftColumn';
import BalanceRightColumn from './BalanceRightColumn';

class BalanceScreen extends React.Component {
    render = () => {
        return (
            <>
                <BalanceLeftColumn />
                <Display>
                    <BalanceScreenContent />
                </Display>
                <BalanceRightColumn />
            </>
        );
    };
}

export default BalanceScreen;