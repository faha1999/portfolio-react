import React from 'react';
import { lightTheme, mediaQueries } from './Themes';
import styled, { ThemeProvider } from 'styled-components';
import { Design, Develope } from './AllSvgs';

import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';
import { Particle } from './partials/Particle';
import { PageTitle } from './partials/PageTitle';

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
      <PowerButton />
      <Particle />

      <Box className="Skills">
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

          <Description className="description">
            <strong>Skills</strong>
            <p>Html, Css, Js, React, Sass, Bootstrap, Firebase etc.</p>
          </Description>

          <Description className="description">
            <strong>Tools</strong>
            <p>VScode, Github, Codepen.</p>
          </Description>
        </Details>

        <PageTitle text="Skills" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};
