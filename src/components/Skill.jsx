import React from 'react';
import { lightTheme } from './Themes';
import styled, { ThemeProvider } from 'styled-components';
import { Design, Develope } from './AllSvgs';

import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
`;

const Details = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  ${Details}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};

  ${Details}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

export const Skill = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <LogoComponent theme={lightTheme} />
      <SocialIcons theme={lightTheme} />
      <PowerButton theme={lightTheme} />

      <Box className="skills">
        <Details className="details">
          <Title className="title">
            <Design width={40} height={40} /> Designer
          </Title>

          <Description className="description">
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>

          <Description className="description">
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Graphic Design</li>
            </ul>
          </Description>

          <Description className="description">
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </Description>
        </Details>

        <Details className="details">
          <Title className="title">
            <Develope width={40} height={40} /> Frontend Developer
          </Title>

          <Description className="description">
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>

          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Sass, Bootstrap, Firebase etc.</p>
          </Description>

          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen.</p>
          </Description>
        </Details>
      </Box>
    </ThemeProvider>
  );
};
