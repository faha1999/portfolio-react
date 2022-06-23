import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../Themes';

const Logo = styled.h1`
  color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

export const LogoComponent = (props) => {
  return (
    <Logo className="logo" color={props.theme}>
      <h1>Faha</h1>
    </Logo>
  );
};
