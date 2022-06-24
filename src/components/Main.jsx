import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { YinYang } from './AllSvgs';
import { Intro } from './Intro';
import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
`;

const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '92%' : '50%')};

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? 'none' : 'inline-block')};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  width: ${(props) => (props.click ? '50%' : '0%')};
  height: ${(props) => (props.click ? '100%' : '0%')};
`;

export const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer className="MainContainer">
      <DarkDiv className="darkDiv" click={click} />
      <div className="container">
        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Center className="center" click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>

        <Contact
          className="contact"
          target="_blank"
          to={{ pathname: 'mailto:kafahad1999@gmail.com' }}
        >
          <h2>Say hi...</h2>
        </Contact>

        <BLOG className="blog" to="./blog">
          <h2>Blog</h2>
        </BLOG>

        <WORK className="work" to="./work" click={click}>
          <h2>Work</h2>
        </WORK>

        <div className="bottomBar" click={click}>
          <ABOUT className="about" to="./about" click={click}>
            <h2>About</h2>
          </ABOUT>

          <SKILLS className="skills" to="./skill">
            <h2>My skills</h2>
          </SKILLS>
        </div>
      </div>

      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};
