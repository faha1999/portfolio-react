import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, Twitter, YouTube } from '../AllSvgs';
import { DarkTheme } from '../Themes';

const Line = styled.span`
  background-color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

export const SocialIcons = (props) => {
  return (
    <div className="socialIcon">
      <div>
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: 'inherit' }}
          target="_blank"
          to={{ pathname: 'https://github.com/faha1999' }}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <Line className="line" color={props.theme} />
    </div>
  );
};
