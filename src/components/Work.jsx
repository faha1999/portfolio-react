import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';

import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';

import { WorkDetails } from '../data/WorkData';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
`;

export const Work = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box className="Work">
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <div className="WorkDetails">
          {WorkDetails.map((d) => (
            <h1>WorkDetails</h1>
          ))}
        </div>
      </Box>
    </ThemeProvider>
  );
};
