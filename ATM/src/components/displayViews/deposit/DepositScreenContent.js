import React from 'react';
import { connect } from 'react-redux';
import {
    View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer, ViewSecondaryText
} from '../reusable/utilityComponents';

class DepositScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText>{this.props.language.DEPOSIT}</ViewMainText>
                    <ViewSecondaryText>{this.props.language.DEPOSIT_SCREEN_DESC}</ViewSecondaryText>
                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side="LEFT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language["20"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language["50"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language["100"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language["200"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                    <ViewColumn side="RIGHT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT">{this.props.language["500"]}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT">{this.props.language.CUSTOM_AMOUNT}</ViewButtonDescription>
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

export default connect(mapStateToProps)(DepositScreenContent);