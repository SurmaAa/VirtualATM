import React from 'react';
import { connect } from 'react-redux';
import { changeViewRequest } from '../../../actions/actions';
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

const mapStateToProps = state => ({
    view: state.paymentsReducer.view
});

const mapDispatchToProps = {
    changeViewRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultScreen);