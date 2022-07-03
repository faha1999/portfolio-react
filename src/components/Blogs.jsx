import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(motion(NavLink))`
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.src})`};

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

// motion
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  },
};

export const Blogs = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;

  return (
    <motion.div className="Blogs" variants={Item}>
      <Box className="box" target="_blank" to={{ pathname: link }}>
        <Image src={imgSrc} className="image" alt="" />
        <Title className="title">{name}</Title>

        <div className="HashTags">
          {tags.map((t, id) => {
            return <span key={id}>#{t}</span>;
          })}
        </div>

        <span className="date">{date}</span>
      </Box>
    </motion.div>
  );
};
