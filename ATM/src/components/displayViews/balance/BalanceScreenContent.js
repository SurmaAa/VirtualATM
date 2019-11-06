import React from 'react';
import { connect } from 'react-redux';
import {
    View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer, ViewSecondaryText
} from '../reusable/utilityComponents';

class BalanceScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText>{this.props.language.BALANCE}</ViewMainText>
                    {this.props.transactionMsg ? <ViewSecondaryText>{this.props.transactionMsg}</ViewSecondaryText> : null}
                    <ViewSecondaryText>{this.props.language.BALANCE_SCREEN_DESC}{(this.props.balance).toFixed(2)}{" " + this.props.language.PLN}</ViewSecondaryText>
                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side="LEFT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT" unsupported={true}></ViewButtonDescription>
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
                            <ViewButtonDescription side="RIGHT" unsupported={true}></ViewButtonDescription>
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
    balance: state.paymentsReducer.balance,
    language: state.paymentsReducer.language,
    transactionMsg: state.paymentsReducer.transactionMsg,
});

export default connect(mapStateToProps)(BalanceScreenContent);