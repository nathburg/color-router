import React from 'react';
import { useParams } from 'react-router-dom';
import './ColorDisplay.css';

export default function ColorDisplay() {
  const { r, g, b } = useParams();
  return (
    <div className='color-display' style={{ background: `rgb(${r}, ${g}, ${b})` }}>
      <div className='rgb'>
        rgb({r}, {g}, {b})
      </div>
    </div>
  );
}
