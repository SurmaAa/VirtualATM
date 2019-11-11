import React from 'react';
import { connect } from 'react-redux';
import {
    View, ViewTextContainer, ViewMainText, ViewColumn, ViewColumnWrapper, ViewButtonDescription, ViewButtonDescriptionContainer, ViewSecondaryText
} from '../reusable/utilityComponents';
import constants from '../../../common/constants';
import { colors } from '../../../css/cssSimpleTheme';
import PropTypes from 'prop-types';

class BalanceScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <ViewTextContainer>
                    <ViewMainText data-test="main-text">{this.props.language.BALANCE}</ViewMainText>
                    {this.props.transactionMsg ? <ViewSecondaryText data-test="secondary-text" overwriteColor={colors.BUTTON_CLEAR}>{this.props.transactionMsg}</ViewSecondaryText> : null}
                    <ViewSecondaryText data-test="secondary-text">{this.props.language.BALANCE_SCREEN_DESC}{(this.props.balance).toFixed(2)}{constants.SPACE + this.props.language.PLN}</ViewSecondaryText>
                </ViewTextContainer>
                <ViewColumnWrapper>
                    <ViewColumn side={constants.LEFT}>
                        <ViewButtonDescriptionContainer>
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.LEFT} unsupported={true}></ViewButtonDescription>
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
                            <ViewButtonDescription data-test="btn-desc-text" side={constants.RIGHT} unsupported={true}></ViewButtonDescription>
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

BalanceScreenContent.propTypes = {
    transactionMsg: PropTypes.string.isRequired,
    language: PropTypes.object.isRequired,
    balance: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    balance: state.paymentsReducer.balance,
    language: state.paymentsReducer.language,
    transactionMsg: state.paymentsReducer.transactionMsg,
});

export default connect(mapStateToProps)(BalanceScreenContent);