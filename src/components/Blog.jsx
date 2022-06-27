import React from 'react';
import styled from 'styled-components';
import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';
import { Blogs } from './Blogs';
import { BlogData } from '../data/BlogData';
import { Anchor } from './partials/Anchor';

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
        <Anchor />

        <div className="center">
          <div className="grid">
            {BlogData.map((blog) => {
              return <Blogs key={blog.id} blog={blog} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
