import React from 'react';
import { connect } from 'react-redux';
import {
    View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer, ViewSecondaryText
} from '../reusable/utilityComponents';

class LanguageScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText>{this.props.language.LANGUAGE}</ViewMainText>
                    <ViewSecondaryText>{this.props.language.LANGUAGE_SCREEN_DESC}</ViewSecondaryText>
                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side="LEFT">
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language.ENGLISH}</ViewButtonDescription>
                        </ViewButtonDescriptionContainer>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription side="LEFT">{this.props.language.POLISH}</ViewButtonDescription>
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
    language: state.paymentsReducer.language
});

export default connect(mapStateToProps)(LanguageScreenContent);