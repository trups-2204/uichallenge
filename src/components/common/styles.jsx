import styled from 'styled-components';
import { Flex } from '@rebass/grid';


export const PageWrapper = styled(Flex)`
flex: 1 1 auto;
flex-direction: column;
align-self: flex-start;
margin-left: auto;
margin-right: auto;
`;

export const PagePanel = styled.div`
min-height: 100vh;
background-color: white;
flex: 1 0 auto;
flex-direction: column;
`;

export const StyledHeader = styled.header `
box-sizing: border-box;
display:flex;
justify-content: center;
`;

export const FlexContainer = styled.div `
max-width: ${({ maxWidth }) => maxWidth};
padding: 0 12px;
flex: 1 1 auto;
text-align:left;
position: relative;
display: flex;
background-color: #fff;
border-bottom: 1px solid #ffffff;
height: 54px;
`;



