import React from 'react';
import { View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer } from '../reusable/utilityComponents';
import { connect } from 'react-redux';

class DefaultScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText>{this.props.language.ATM}</ViewMainText>
                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side="LEFT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language.WITHDRAWAL}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language.DEPOSIT}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language.BALANCE}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT" unsupported={true}>{this.props.language.BALANCE}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                    <ViewColumn side="RIGHT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT" unsupported={true}>{this.props.language.HACK}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="RIGHT">{this.props.language.LANGUAGE}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer side="RIGHT">
                            <ViewButtonDescription>{this.props.language.HELP}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer side="RIGHT">
                            <ViewButtonDescription unsupported={true}>{this.props.language.BACK}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                    </ViewColumn>
                </ViewColumnWrapper>
            </View>
        );
    };
}

const mapStateToProps = state => ({
    language: state.paymentsReducer.language
});

export default connect(mapStateToProps)(DefaultScreenContent);