import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Facebook, Github, Twitter, YouTube } from '../AllSvgs';
import { DarkTheme } from '../Themes';

const Line = styled(motion.span)`
  background-color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`;

export const SocialIcons = (props) => {
  return (
    <div className="socialIcon">
      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/faha1999"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/faha1999"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/faha1999"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/faha1999"
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        initial={{
          height: 0,
        }}
        animate={{
          height: '8rem',
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
        className="line"
        color={props.theme}
      />
    </div>
  );
};
