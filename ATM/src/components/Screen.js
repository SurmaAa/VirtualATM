import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeViewRequest } from '../actions/actions';
import DefaultScreenContent from './displayViews/default/DefaultScreenContent';
import DefaultLeftColumn from './displayViews/default/DefaultLeftColumn';
import DefaultRightColumn from './displayViews/default/DefaultRightColumn';
import DefaultScreen from './displayViews/default/DefaultScreen';

// const Display = styled.div`
//     flex-basis: 100%;
//     display: flex;
//     flex-flow: column;
// `;

const ScreenContainer = styled.div`
    display: flex;
    width: 50vw;
    height: 30vw;
    background-color: #224369;
    border-radius: 1rem;
    margin-left: auto;
    margin-right: auto;
`;

class Screen extends React.Component {

    displayContent = () => {
        return (<DefaultScreen/>);
    };

    render = () => {
        return (
            <ScreenContainer>
                {this.displayContent()}
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