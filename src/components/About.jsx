import React from 'react';
import { DarkTheme, lightTheme } from './Themes';
import styled, { ThemeProvider } from 'styled-components';
import astronaut from '../assets/Images/spaceman.png';

import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';
import { AboutParticle } from './partials/AboutParticle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
`;

const AboutMe = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
`;

export const About = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box className="About">
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <AboutParticle />

        <div className="spaceman">
          <img src={astronaut} alt="spaceman" />
        </div>

        <AboutMe className="AboutMe">
          People find me to be an upbeat, self-motivated team player with
          excellent communication & organizational skills. I have not only
          headed any project but also ensured its success by demonstrating
          leadership abilities.
          <br /> <br />
          Besides that I always feel very joyous and fortunate to meet and greet
          people belonging to different backgrounds and cultures. As such
          meetings are always important because they prove to be beneficial in
          future also it makes things easy to cope whether one works or studies
          in his own country or outside the country. I believe "Never stop
          dreaming because my success is hiding inside my dream."
        </AboutMe>
      </Box>
    </ThemeProvider>
  );
};
