import React from 'react';
import { NavLink } from 'react-router-dom';
import { PowerBtn } from '../AllSvgs';

export const PowerButton = () => {
  return (
    <div className="power">
      <NavLink to={'/'}>
        <PowerBtn width={30} height={30} fill="black" />
      </NavLink>
    </div>
  );
};
