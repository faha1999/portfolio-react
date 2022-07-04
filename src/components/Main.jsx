import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
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
        {/* <PowerButton /> */}
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
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Say hi...
          </motion.h2>
        </Contact>

        <BLOG className="blog" to="./blog">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>

        <WORK className="work" to="./work" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>

        <div className="bottomBar" click={click}>
          <ABOUT className="about" to="./about" click={click}>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>

          <SKILLS className="skills" to="./skill">
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My skills
            </motion.h2>
          </SKILLS>
        </div>
      </div>

      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};
