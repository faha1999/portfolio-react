import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';
import { Blogs } from './Blogs';
import { BlogData } from '../data/BlogData';
import { Anchor } from './partials/Anchor';
import { PageTitle } from './partials/PageTitle';

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
`;

// motion
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export const Blog = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <motion.div
      className="mainContainer"
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container className="container">
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Anchor number={numbers} />

        <div className="center">
          <div className="grid">
            {BlogData.map((blog) => {
              return <Blogs key={blog.id} blog={blog} />;
            })}
          </div>
        </div>

        <PageTitle text="Blog" top="5rem" left="5rem" />
      </Container>
    </motion.div>
  );
};
