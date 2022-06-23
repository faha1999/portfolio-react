import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { YinYang } from './AllSvgs';
import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`;
export const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="MainContainer">
      <div className="container">
        <PowerButton />
        <LogoComponent />
        <SocialIcons />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>

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
