import React from 'react';
import { Display } from '../reusable/utilityComponents';
import WithdrawalScreenContent from './WithdrawalScreenContent';
import WithdrawalLeftColumn from './WithdrawalLeftColumn';
import WithdrawalRightColumn from './WithdrawalRightColumn';

class WithdrawalScreen extends React.Component {
    render = () => {
        return (
            <>
                <WithdrawalLeftColumn />
                <Display>
                    <WithdrawalScreenContent />
                </Display>
                <WithdrawalRightColumn />
            </>
        );
    };
}

export default WithdrawalScreen;