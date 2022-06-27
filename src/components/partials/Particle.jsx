import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="Particle">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ff0000',
              animation: {
                enable: true,
                speed: 20,
                sync: true,
              },
            },
            opacity: {
              value: 1,
            },
            size: {
              value: {
                min: 0.1,
                max: 3,
              },
            },
            links: {
              enable: true,
              distance: 100,
              color: '#000000',
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: 'none',
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 200,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
          background: {
            color: '#FCF6F4',
          },
        }}
      />
    </div>
  );
};
