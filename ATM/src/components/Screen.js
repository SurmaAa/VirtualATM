import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeViewRequest } from '../actions/actions';
import DefaultScreen from './displayViews/default/DefaultScreen';

const ScreenContainer = styled.div`
    display: flex;
    width: 50vw;
    height: 40vw;
    background-color: #224369;
    border-radius: 1rem;
    margin-left: auto;
    margin-right: auto;
    align-items: flex-end;
`;

class Screen extends React.Component {

    // displayContent = () => {
    //     return (<DefaultScreen/>);
    // };

    render = () => {
        return (
            <ScreenContainer>
                {/* {this.displayContent()} */}
                <Router>
                    <Switch>
                        <Route exact path="/" component={DefaultScreen} />
                        <Route path="/balance" render={() => <div>Cipks</div>} />
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
    changeViewRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);