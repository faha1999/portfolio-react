import React from 'react';
import styled from 'styled-components';
import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
`;

export const Blog = () => {
  return (
    <div className="mainContainer">
      <Container className="container">
        <LogoComponent />
        <PowerButton />
        <SocialIcons />

        <div className="center">
          <div className="grid">
            <h1>blogs</h1>
            <h1>blogs</h1>
            <h1>blogs</h1>
          </div>
        </div>
      </Container>
    </div>
  );
};
