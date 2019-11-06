import styled from 'styled-components';

/*Column Components*/
export const ButtonsColumn = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 1rem;
    height: 50%;
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
    height: 100%;
`;

/*View Components*/
export const View = styled.div`
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: #2fa9b3;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    display: flex;
`;

export const ViewColumn = styled.div`
    flex: 1;
    display: flex; 
    flex-flow: column;
    justify-content: space-between;
    ${props => props.side === "LEFT" ? "padding-right: 0.5rem;" : "padding-left: 0.5rem;"}
`;

export const ViewButtonDescriptionContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ViewButtonDescription = styled.div`
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

export const ViewColumnWrapper = styled.div`
        display: flex;
        width: 100%;
        height: calc(50% + 1rem);
`;

export const ViewTextContainer = styled.div`
    flex-basis: 100%;
    display: flex;
    height: calc(50% - 1rem);
    align-items: center;
`;

export const ViewMainText = styled.h1`
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    color: #07ff53;
    font-size: 4rem;
    letter-spacing: 1rem;
`;