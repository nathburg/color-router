import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import './Header.css';


function inRange(number) {
  return 0 <= number && number < 256;
}
export default function Header() {
  
  const { r, g, b } = useParams();

  if (inRange(r) && inRange(g) && inRange(b)) {
    return (
      <div className='header'>
        <div>
          <NavLink to='/rgb/0/71/171' activeStyle={{ color: 'rgb(0,71,171' }}>
          Cobalt Blue
          </NavLink>
        </div>
        <div>
          <NavLink to='/rgb/150/64/0' activeStyle={{ color: 'rgb(150, 64, 0' }}>
          Burnt Orange
          </NavLink>
        </div>
        <div>
          <NavLink to='/rgb/255/184/212' activeStyle={{ color: 'rgb(255, 184, 212)' }}>
          Pepto Bismol
          </NavLink>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
  
}
