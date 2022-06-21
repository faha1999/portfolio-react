import React from 'react';
import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';

export const Main = () => {
  return (
    <div className="MainContainer">
      <div className="container">
        <PowerButton />
        <LogoComponent />
      </div>
    </div>
  );
};
