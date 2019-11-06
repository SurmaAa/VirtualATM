import React from 'react';
import styled from 'styled-components';

const View = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #2fa9b3;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    align-items: flex-end;
`;

const Column = styled.div`
    height: calc(50% + 1rem);
    flex: 1;
    display: flex; 
    flex-flow: column;
    justify-content: space-between;
    ${props => props.side === "LEFT" ? "padding-right: 0.5rem;" : "padding-left: 0.5rem;"}
`;

const ButtonDescriptionContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
`;

const ButtonDescription = styled.div`
    color: black;
    padding: 1.3rem;
    background-color: #22436869;
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    ${props => props.unsupported ?
        `color: #808080;
    background-color: #dddddd;`
        :
        `color: #07ff53;
    background-color: #22436869;`}
    ${props => props.side === "LEFT" ?
        `border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;`
        :
        `border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;`}    
`;

class DefaultScreenContent extends React.Component {
    render = () => {
        return (
            <View>
                <Column side="LEFT">
                    <ButtonDescriptionContainer>
                        <ButtonDescription side="LEFT">Withdrawal</ButtonDescription>
                    </ButtonDescriptionContainer>
                    <ButtonDescriptionContainer>
                        <ButtonDescription side="LEFT">Deposit</ButtonDescription>
                    </ButtonDescriptionContainer>
                    <ButtonDescriptionContainer>
                        <ButtonDescription side="LEFT">Balance</ButtonDescription>
                    </ButtonDescriptionContainer>
                    <ButtonDescriptionContainer>
                        <ButtonDescription side="LEFT" unsupported={true}>Blik Transaction</ButtonDescription>
                    </ButtonDescriptionContainer>
                </Column>
                <Column side="RIGHT">
                    <ButtonDescriptionContainer>
                        <ButtonDescription side="RIGHT" unsupported={true}>Hack the ATM</ButtonDescription>
                    </ButtonDescriptionContainer>
                    <ButtonDescriptionContainer>
                        <ButtonDescription side="RIGHT">Language</ButtonDescription>
                    </ButtonDescriptionContainer>
                    <ButtonDescriptionContainer side="RIGHT">
                        <ButtonDescription>Help</ButtonDescription>
                    </ButtonDescriptionContainer>
                    <ButtonDescriptionContainer side="RIGHT">
                        <ButtonDescription>Exit</ButtonDescription>
                    </ButtonDescriptionContainer>
                </Column>
            </View>
        );
    };
}

export default DefaultScreenContent;