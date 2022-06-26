import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`
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
`;

const Text = styled.div`
  color: ${(props) => props.theme.body};

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  }
`;

export const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
      className="intro"
    >
      <div className="details">
        <Text className="text">
          <h1>Hi,</h1>
          <h3>I'm faha.</h3>
          <h6>I'm a self-taught passionate FrontEnd developer.</h6>
        </Text>
      </div>

      <div className="details">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img src={Me} alt="faha1999" />
        </motion.div>
      </div>
    </Box>
  );
};