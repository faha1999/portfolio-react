import React from 'react';
import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';

export const Main = () => {
  return (
    <div className="MainContainer">
      <div className="container">
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
      </div>
    </div>
  );
};
