import React from 'react';
import { connect } from 'react-redux';
import {
    View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer, ViewSecondaryText
} from '../reusable/utilityComponents';

class ConfirmScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText>{this.props.language.DEPOSIT}</ViewMainText>
                    {/* Just don't want to create another Component.js for 2 text elements */}
                    {(() => {
                        if (this.props.transactionMoneyAmount) {
                            return (
                                <>
                                    <ViewSecondaryText>{this.props.language.CONFIRM_SCREEN_DESC}</ViewSecondaryText>
                                    <ViewSecondaryText fakeInput={true}>{(this.props.transactionMoneyAmount).toFixed(2)} {this.props.language.PLN}</ViewSecondaryText>
                                    <ViewSecondaryText>?</ViewSecondaryText>
                                </>
                            );
                        }

                        return (
                            <>
                                <ViewSecondaryText>{this.props.language.PROVIDE_AMOUNT}</ViewSecondaryText>
                                <ViewSecondaryText fakeInput={true}>{(this.props.transactionMoneyAmount).toFixed(2)} {this.props.language.PLN}</ViewSecondaryText>
                            </>
                        );
                    })()}

                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side="LEFT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language.CONFIRM}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT" unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT" unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT" unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                    <ViewColumn side="RIGHT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT">{this.props.language.CANCEL}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT" unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT" unsupported={true}></ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT">{this.props.language.BACK}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                </ViewColumnWrapper>
            </View>
        );
    };
}

const mapStateToProps = state => ({
    language: state.paymentsReducer.language,
    transactionMoneyAmount: state.paymentsReducer.transactionMoneyAmount
});

export default connect(mapStateToProps)(ConfirmScreenContent);