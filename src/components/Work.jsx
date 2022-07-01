import React, { useRef, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';

import { LogoComponent } from './partials/LogoComponent';
import { PowerButton } from './partials/PowerButton';
import { SocialIcons } from './partials/SocialIcons';
import { YinYang } from './AllSvgs';
import { WorkDetails } from '../data/WorkData';
import { WorkCard } from './partials/WorkCard';
import { PageTitle } from './partials/PageTitle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
`;

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

export const Work = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)');
    };

    window.addEventListener('scroll', rotate);
    return () => {
      window.removeEventListener('scroll', rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box className="Work">
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <motion.div
          className="WorkDetails"
          ref={ref}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {WorkDetails.map((d) => (
            <WorkCard key={d.id} data={d} />
          ))}
        </motion.div>

        <span className="rotate" ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </span>

        <PageTitle text="Work" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};
