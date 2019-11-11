import React from 'react';
import { connect } from 'react-redux';
import {
    View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer, ViewSecondaryText
} from '../reusable/utilityComponents';
import constants from '../../../common/constants';
import PropTypes from 'prop-types';

class ConfirmScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText data-test="main-text">{this.props.language.WITHDRAWAL}</ViewMainText>
                    {/* Just don't want to create another Component.js for 2 text elements */}
                    {(() => {
                        if (this.props.transactionMoneyAmount) {
                            return (
                                <>
                                    <ViewSecondaryText data-test="secondary-text">{this.props.language.CONFIRM_WITHDRAWAL_SCREEN_DESC}</ViewSecondaryText>
                                    <ViewSecondaryText data-test="secondary-text" fakeInput={true}>{(this.props.transactionMoneyAmount).toFixed(2)} {this.props.language.PLN}</ViewSecondaryText>
                                    <ViewSecondaryText data-test="secondary-text">{constants.QUESTION_MARK}</ViewSecondaryText>
                                </>
                            );
                        }

                        return (
                            <>
                                <ViewSecondaryText data-test="secondary-text">{this.props.language.PROVIDE_AMOUNT}</ViewSecondaryText>
                                <ViewSecondaryText data-test="secondary-text" fakeInput={true}>{(this.props.transactionMoneyAmount).toFixed(2)} {this.props.language.PLN}</ViewSecondaryText>
                            </>
                        );
                    })()}

                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side={constants.LEFT}>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT}>{this.props.language.CONFIRM}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT} unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT} unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT} unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                    <ViewColumn side={constants.RIGHT}>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.RIGHT}>{this.props.language.CANCEL}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.RIGHT} unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.RIGHT} unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.RIGHT}>{this.props.language.BACK}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                </ViewColumnWrapper>
            </View>
        );
    };
}

ConfirmScreenContent.propTypes = {
    language: PropTypes.object.isRequired,
    transactionMoneyAmount: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    language: state.paymentsReducer.language,
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount
});

export default connect(mapStateToProps)(ConfirmScreenContent);