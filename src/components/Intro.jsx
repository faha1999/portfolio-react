import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png';
import { mediaQueries } from './Themes';

const Box = styled(motion.div)`
  width: 65vw;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  ${mediaQueries(1200)`
  width: 65vw;
`};

  ${mediaQueries(60)`
  width: 70vw;
`};

  ${mediaQueries(50)`
  width: 50vw;
  background-size: 100% 2px;
  flex-direction:column;
  justify-content:space-between;

`};

  ${mediaQueries(40)`
  width: 60vw;
`};

  ${mediaQueries(30)`
  width: 70vw;
`};
  ${mediaQueries(20)`
  width: 60vw;
`};

  @media screen and (max-width: 767px) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;

    width: 70vw;
    // background-size: 100% 2px;
    height: 70vh !important;

    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 678px) and (max-width: 1023px) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;

    // width: 70vw;
    // background-size: 100% 2px;
    height: 70vh !important;

    flex-direction: column;
    justify-content: space-between;
  }
`;

const Details = styled.div`
  width: 50%;

  & img {
    width: 100%;
  }

  ${mediaQueries(50)`
      width: 100%;
      height: 50%;

      img {
    width: 70%;
  }

  `};

  ${mediaQueries(40)`

      img {

    width: 80%;

  }

  `};

  ${mediaQueries(30)`

      img {

    width: 90%;

  }

  `};
  ${mediaQueries(20)`

     img {

   width: 80%;

 }

 `};
`;

const Text = styled.div`
  color: ${(props) => props.theme.body};
  padding: 2rem;
  font-size: calc(1em + 1.5vw);

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};

    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;

    ${mediaQueries(40)`
        font-size: calc(0.5rem + 1vw);
  `};
  }

  ${mediaQueries(40)`
        font-size: calc(1rem + 1.5vw);
  `};

  ${mediaQueries(20)`
         padding: 1rem;
  `};
`;

export const Intro = () => {
  const [height, setHeight] = useState('55vh');

  useEffect(() => {
    if (window.matchMedia('(max-width: 50em)').matches) {
      setHeight('70vh');
    }
    if (window.matchMedia('(max-width: 20em)').matches) {
      setHeight('60vh');
    }
  }, []);

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
      className="intro"
    >
      <Details className="details">
        <Text className="text">
          <h1>Hi,</h1>
          <h3>I'm faha.</h3>
          <h6>I'm a self-taught passionate FrontEnd developer.</h6>
        </Text>
      </Details>

      <Details className="details">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img src={Me} alt="faha1999" />
        </motion.div>
      </Details>
    </Box>
  );
};
