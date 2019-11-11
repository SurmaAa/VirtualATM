import React from 'react';
import { View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer } from '../reusable/utilityComponents';
import { connect } from 'react-redux';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class DefaultScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText data-test="main-text">{this.props.language.ATM}</ViewMainText>
                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side={constants.LEFT}>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT}>{this.props.language.WITHDRAWAL}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT}>{this.props.language.DEPOSIT}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT}>{this.props.language.BALANCE}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT} unsupported={true}>{this.props.language.BLIK_TRANSACTION}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                    <ViewColumn side={constants.RIGHT}>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.RIGHT} unsupported={true}>{this.props.language.HACK}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.RIGHT}>{this.props.language.LANGUAGE}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer side={constants.RIGHT}>
                            <ViewButtonDescription data-test="btn-desc-text">{this.props.language.HELP}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer side={constants.RIGHT}>
                            <ViewButtonDescription data-test="btn-desc-text" unsupported={true}>{this.props.language.BACK}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                </ViewColumnWrapper>
            </View>
        );
    };
}

DefaultScreenContent.propTypes = {
    language: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    language: state.paymentsReducer.language
});

export default connect(mapStateToProps)(DefaultScreenContent);