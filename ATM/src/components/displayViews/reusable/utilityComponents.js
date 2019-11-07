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
    ${props => props.wide ? "width: 6rem;" : "width: 3rem;"}
    height: 3rem;
    border-radius: 1rem;
    font-weight: bolder;
    font-size: 1rem;
    ${props => props.bgColor ? `background-color: ${props.bgColor}` : null}
    ${props => props.margin ? "margin: .5rem;" : null}
    ${props => props.buttonBlocked ? "background-color: #808080; cursor: not-allowed;" : "cursor: pointer;"}

    @media (max-width: 700px) {
        border-radius: .5rem;
        ${props => props.wide ? "width: 4rem;" : "width: 2rem;"}
        font-size: .75rem;
        height: 2rem;
    }
    @media (max-width: 600px) {
        border-radius: .5rem;
        ${props => props.wide ? "width: 4rem;" : "width: 2rem;"}
        font-size: .65rem;
        height: 2rem;
    }
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
    border-radius: 1rem;
    display: flex;
    overflow: hidden;
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
    @media (max-width: 600px) {
        font-size: 0.75rem;
        justify-content: flex-start;
    }
    @media (max-width: 400px) {
        font-size: .65rem;
        height: 50%;
    }
`;

export const ViewColumnWrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(50% + 2rem);
`;

export const ViewTextContainer = styled.div`
    flex-basis: 100%;
    display: flex;
    height: calc(50% - 2.4rem);
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
`;

export const ViewMainText = styled.h1`
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    color: #07ff53;
    font-size: 4rem;
    letter-spacing: 1rem;
    margin: 0;
    text-align: center;
    word-break: break-word;
    @media (max-width: 1000px) {
        font-size: 2rem;
        letter-spacing: .5rem;
    }
    @media (max-width: 500px) {
        letter-spacing: normal;
    }
`;


export const ViewSecondaryText = styled.h1`
    display: flex;
    justify-content: center;
    flex-basis: 100%;
    color: #07ff53;
    text-align: center;
    margin: 0;
    ${props => {
        if (props.fakeInput) {
            return `
            &::after {
                content: '|';
                animation: flashing .25s linear infinite;
                animation-direction: alternate;
                @keyframes flashing {
                    from {
                        opacity: 0;
                      }
                    to {
                    opacity: 1;
                    }
                }
            }`;
        }
    }}
    @media (max-width: 1000px) {
        font-size: 1rem;
    }
`;

