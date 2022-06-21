import React from 'react';
import { NavLink } from 'react-router-dom';
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

        <NavLink
          className="contact"
          target="_blank"
          to={{ pathname: 'mailto:kafahad1999@gmail.com' }}
        >
          <h3>Say hi...</h3>
        </NavLink>

        <NavLink className="blog" to="./blog">
          <h3>Blog</h3>
        </NavLink>

        <NavLink className="work" to="./work">
          <h3>Work</h3>
        </NavLink>

        <div className="bottomBar">
          <NavLink className="about" to="./about">
            <h3>About</h3>
          </NavLink>

          <NavLink className="skills" to="./skill">
            <h3>My skills</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
