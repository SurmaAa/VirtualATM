import styled from 'styled-components';

const ATM = styled.div`
    height: calc(100vh - 2rem);
    display: flex;
    flex-flow: column;
    margin: 1rem;
    @media (max-width: 700px) {
        margin-left: 0;
        margin-right: 0;
    }
`;

export default ATM;