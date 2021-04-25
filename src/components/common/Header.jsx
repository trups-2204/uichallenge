import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {StyledHeader, FlexContainer } from '../common/styles';

export const Button = styled.button`
background-color: #ccc;
color: white;
font-size: 20px;
border-radius: 5px;
cursor: pointer;
border: none;
`;
export const StyledHeaderPanel = styled.div`
 display: flex; 

`;
export const StyledHeaderTitle = styled.h1`
flex-grow: 1;

`;
const HeaderTitle = styled.h1`
display: flex;
align-items: center;
margin: 0 auto;
font-size: 16px;
color: #000033;
`;

export const PageHeader = ({
  headerTitle,
  onSignOut,
}) =>
(    
  <StyledHeader>
<FlexContainer>
  <HeaderTitle>{headerTitle}</HeaderTitle>
  <Button onClick={onSignOut}>Sign Out</Button>
</FlexContainer>

  </StyledHeader>
  


 );
PageHeader.propTypes ={
  onSignOut: PropTypes.func.isRequired,
  headerTitle: PropTypes.string.isRequired,
}
export default PageHeader;