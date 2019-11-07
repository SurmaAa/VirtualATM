import styled from 'styled-components';
import constants from '../../../common/constants';
import { colors } from '../../../css/cssSimpleTheme';

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
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    justify-content: :center;
    align-items: center;
    color: ${colors.KEYBOARD};
    ${props => props.bgColor ? `background-color: ${props.bgColor}` : null}
    ${props => props.margin ? "margin: .5rem;" : null}
    ${props => props.buttonBlocked ? `background-color: ${colors.DISABLED}; cursor: not-allowed;` : "cursor: pointer;"}
    @media (max-width: 1100px) {
        font-weight: normal;
    }
    @media (max-width: 700px) {
        border-radius: .5rem;
        ${props => props.wide ? "width: 6rem;" : "width: 2rem;"}
        font-size: .75rem;
        height: 2rem;
    }
    @media (max-width: 600px) {
        border-radius: .5rem;
        ${props => props.wide ? "width: 6rem;" : "width: 2rem;"}
        font-size: .65rem;
        height: 2rem;
    }
    @media (max-height: 800px) {
        border-radius: .5rem;
        ${props => props.wide ? "width: 6rem;" : "width: 2rem;"}
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
    background-color: ${colors.SCREEN};
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
    ${props => props.side === constants.LEFT ? "padding-right: 0.5rem;" : "padding-left: 0.5rem;"}
`;

export const ViewButtonDescriptionContainer = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const ViewButtonDescription = styled.div`
    color: ${colors.DESCRIPTION_TEXT};
    padding: 1.3rem;
    background-color: ${colors.DESCRIPTION};
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    ${props => props.unsupported ?
        `color: ${colors.DISABLED};
    background-color: ${colors.DISABLED_BG};`
        : null}
    ${props => props.side === constants.LEFT ?
        `border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;`
        :
        `border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;`} 
    @media (max-width: 1100px) {
        font-weight: normal;
    }
    @media (max-width: 600px) {
        font-size: 0.75rem;
        justify-content: flex-start;
        font-weight: normal;
    }
    @media (max-width: 400px) {
        font-size: .65rem;
        height: 50%;
        font-weight: normal;
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
    color: ${colors.CASE};
    font-size: 3rem;
    letter-spacing: .75rem;
    margin: 0;
    text-align: center;
    word-break: break-word;
    @media (max-width: 1500px) {
        font-size: 2rem;
        letter-spacing: .5rem;
    }
    @media (max-width: 1100px) {
        font-size: 1.5rem;
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
    color: ${props => props.overwriteColor ? `${props.overwriteColor};` : `${colors.CASE};`}
    text-align: center;
    margin: 0;
    font-size: 1.3rem;
    @media (max-width: 1100px) {
        font-size: 1rem;
    }
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
`;

