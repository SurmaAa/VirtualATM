import React from 'react';
import { connect } from 'react-redux';
import { changeLanguageRequest } from '../../../actions/actions';
import { ButtonsColumn, Button } from '../reusable/utilityComponents';
import constants from '../../../common/constants';

class LanguageLeftColumn extends React.Component {
    render = () => {
        return (
            <ButtonsColumn>
                <Button onClick={() => this.props.changeLanguageRequest(constants.LANG_EN)}/>
                <Button onClick={() => this.props.changeLanguageRequest(constants.LANG_PL)}/>
                <Button disabled buttonBlocked={true} />
                <Button disabled buttonBlocked={true} />
            </ButtonsColumn >
        );
    };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    changeLanguageRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageLeftColumn);