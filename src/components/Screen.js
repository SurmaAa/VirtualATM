import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import DefaultScreen from './displayViews/default/DefaultScreen';
import BalanceScreen from './displayViews/balance/BalanceScreen';
import HelpScreen from './displayViews/help/HelpScreen';
import LanguageScreen from './displayViews/language/LanguageScreen';
import DepositScreen from './displayViews/deposit/DepositScreen';
import WithdrawalScreen from './displayViews/withdrawal/WithdrawalScreen';
import ConfirmDepositScreen from './displayViews/confirmDeposit/ConfirmScreen';
import ConfirmWithdrawalScreen from './displayViews/confirmWithdrawal/ConfirmScreen';
import history from '../common/history';
import constants from '../common/constants';
import { colors } from '../css/cssSimpleTheme';

const ScreenContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    width: 40vw;
    height: 30vw;
    background-color: ${colors.CASE};
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    margin-left: auto;
    margin-right: auto;
    align-items: flex-end;
    @media (max-width: 1600px) {
        width: 50vw;
        height: 50vh;
    }
    @media (max-width: 1500px) {
        width: 60vw;
        height: 50vh;
    }
    @media (max-width: 1100px) {
        height: 50vw;
    }
    @media (max-width: 900px) {
        height: 60vw;
    }
    @media (max-width: 900px) {
        height: 50vh;
    }
    @media (max-width: 700px) {
        width: 95vw;
    }
`;

class Screen extends React.Component {
    render = () => {
        return (
            <ScreenContainer>
                <Router history={history}>
                    <Switch>
                        <Route exact path={constants.GET_HOMEPAGE} component={DefaultScreen} />
                        <Route path={constants.GET_BALANCE} component={BalanceScreen} />
                        <Route path={constants.GET_HELP} component={HelpScreen} />
                        <Route path={constants.GET_LANGUAGE} component={LanguageScreen} />
                        <Route path={constants.GET_WITHDRAWAL} component={WithdrawalScreen} />
                        <Route path={constants.GET_DEPOSIT} component={DepositScreen} />
                        <Route path={constants.GET_CONFIRM_DEPOSIT} component={ConfirmDepositScreen} />
                        <Route path={constants.GET_CONFIRM_WITHDRAWAL} component={ConfirmWithdrawalScreen} />
                        <Route component={DefaultScreen} />
                    </Switch>
                </Router>
            </ScreenContainer>
        );
    };
}

export default Screen;