import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div>
        <NavLink
          to="/rgb/0/71/171"
          style={({ isActive }) => (isActive ? { color: 'rgb(0,71,171' } : { color: 'gray' })}
        >
          Cobalt Blue
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/rgb/150/64/0"
          style={({ isActive }) => (isActive ? { color: 'rgb(150, 64, 0' } : { color: 'gray' })}
        >
          Burnt Orange
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/rgb/255/184/212"
          style={({ isActive }) => (isActive ? { color: 'rgb(255, 184, 212)' } : { color: 'gray' })}
        >
          Pepto Bismol
        </NavLink>
      </div>
    </div>
  );
}
