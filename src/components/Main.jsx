import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { YinYang } from './AllSvgs';
import { Intro } from './Intro';
import { LogoComponent } from './partials/LogoComponent';
import { SocialIcons } from './partials/SocialIcons';
import { mediaQueries } from './Themes';

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
`;

const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
`;

const BLOG = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  @media screen and (max-width: 767px) {
    text-shadow: ${(props) => (props.click ? '0 0 4px #000' : 'none')};
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  @media screen and (max-width: 767px) {
    text-shadow: ${(props) => (props.click ? '0 0 4px #000' : 'none')};
  }
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

  @media only screen and (max-width: 50em) {
    top: ${(props) => (props.click ? '90%' : '50%')};
    left: ${(props) => (props.click ? '90%' : '50%')};
    width: ${(props) => (props.click ? '80px' : '150px')};
    height: ${(props) => (props.click ? '80px' : '150px')};
  }
  @media only screen and (max-width: 30em) {
    width: ${(props) => (props.click ? '40px' : '150px')};
    height: ${(props) => (props.click ? '40px' : '150px')};
  }

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
  right: 50%;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
       height: 50%;
  right:0;
  
  width: 100%;
  transition: width 0.5s ease, height 1s ease 0.5s;

  `
      : mediaQueries(50)`
       height: 0;
  
  width: 0;
  `};
`;

export const Main = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState('');
  const handleClick = () => setClick(!click);

  const moveY = {
    y: '-100%',
  };
  const moveX = {
    x: `${path === 'work' ? '100%' : '-100%'}`,
  };
  const mq = window.matchMedia('(max-width: 50em)').matches;

  return (
    <MainContainer
      className="MainContainer"
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={path === 'about' || path === 'skills' ? moveY : moveX}
      transition={{ duration: 0.5 }}
    >
      <DarkDiv className="darkDiv" click={click} />
      <div className="container">
        <LogoComponent theme={click ? 'dark' : 'light'} />
        {mq ? (
          <SocialIcons theme="light" />
        ) : (
          <SocialIcons theme={click ? 'dark' : 'light'} />
        )}

        <Center className="center" click={click}>
          {mq ? (
            <YinYang
              onClick={() => handleClick()}
              width={click ? 80 : 150}
              height={click ? 80 : 150}
              fill="currentColor"
            />
          ) : (
            <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
          )}
          <span>click here</span>
        </Center>

        {mq ? (
          <Contact
            click={+click}
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
        ) : (
          <Contact
            className="contact"
            click={+false}
            target="_blank"
            to={{ pathname: 'mailto:kafahad1999@gmail.com' }}
          >
            <motion.h3
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
              Say hi..
            </motion.h3>
          </Contact>
        )}

        {mq ? (
          <BLOG
            className="blog"
            click={+click}
            onClick={() => setpath('blog')}
            to="./blog"
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
              Blog
            </motion.h2>
          </BLOG>
        ) : (
          <BLOG
            className="blog"
            click={+false}
            onClick={() => setpath('blog')}
            to="/blog"
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
              Blog
            </motion.h2>
          </BLOG>
        )}

        <WORK className="work" to="./work" click={+click}>
          <motion.h2
            onClick={() => setpath('work')}
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
          <ABOUT
            className="about"
            onClick={() => setClick(false)}
            click={mq ? +false : +click}
            to="./about"
          >
            <motion.h2
              onClick={() => setpath('about')}
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
              onClick={() => setpath('skills')}
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
