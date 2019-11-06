import styled from 'styled-components';

export const ButtonsColumn = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    margin: 1rem;
`;

export const Button = styled.button`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    ${props => props.buttonBlocked ? "background-color: #808080;" : null}
`;

export const Display = styled.div`
flex-basis: 100%;
display: flex;
flex-flow: column;
`;