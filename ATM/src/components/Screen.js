import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultScreen from './displayViews/default/DefaultScreen';
import BalanceScreen from './displayViews/balance/BalanceScreen';
import HelpScreen from './displayViews/help/HelpScreen';
import LanguageScreen from './displayViews/language/LanguageScreen';
import DepositScreen from './displayViews/deposit/DepositScreen';
import ConfirmScreen from './displayViews/confirm/ConfirmScreen';

const ScreenContainer = styled.div`
    display: flex;
    width: 50vw;
    height: 30vw;
    background-color: #224369;
    border-radius: 1rem;
    margin-left: auto;
    margin-right: auto;
    align-items: flex-end;
`;

class Screen extends React.Component {
    render = () => {
        return (
            <ScreenContainer>
                <Router>
                    <Switch>
                        <Route exact path="/" component={DefaultScreen} />
                        <Route path="/balance" component={BalanceScreen}/>
                        <Route path="/help" component={HelpScreen}/>
                        <Route path="/language" component={LanguageScreen}/>
                        <Route path="/withdrawal" component={LanguageScreen}/>
                        <Route path="/deposit" component={DepositScreen}/>
                        <Route path="/confirm" component={ConfirmScreen}/>
                        <Route component={DefaultScreen} />
                    </Switch>
                </Router>
            </ScreenContainer>
        );
    };
}

const mapStateToProps = state => ({
    view: state.paymentsReducer.view
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);