import React from 'react';
import { NavLink } from 'react-router-dom';
import { YinYang } from './AllSvgs';
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

        <div>
          <button className="center">
            <YinYang width={130} height={130} fill="black" />
            <span>Click here</span>
          </button>
        </div>

        <NavLink
          className="contact"
          target="_blank"
          to={{ pathname: 'mailto:kafahad1999@gmail.com' }}
        >
          <h2>Say hi...</h2>
        </NavLink>

        <NavLink className="blog" to="./blog">
          <h2>Blog</h2>
        </NavLink>

        <NavLink className="work" to="./work">
          <h2>Work</h2>
        </NavLink>

        <div className="bottomBar">
          <NavLink className="about" to="./about">
            <h2>About</h2>
          </NavLink>

          <NavLink className="skills" to="./skill">
            <h2>My skills</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
