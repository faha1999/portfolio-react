import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Github, Twitter, YouTube } from '../AllSvgs';

export const SocialIcons = () => {
  return (
    <div className="socialIcon">
      <div>
        <NavLink
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <Github width={25} height={25} fill="black" />
        </NavLink>
      </div>

      <div>
        <NavLink
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <Twitter width={25} height={25} fill="black" />
        </NavLink>
      </div>

      <div>
        <NavLink
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <Facebook width={25} height={25} fill="black" />
        </NavLink>
      </div>

      <div>
        <NavLink
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <YouTube width={25} height={25} fill="black" />
        </NavLink>
      </div>

      <div className="line"></div>
    </div>
  );
};
