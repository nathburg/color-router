import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './ColorDisplay.css';

export default function ColorDisplay() {
  const { r, g, b } = useParams();
  return (
    <>  
      <Header />
      <div className='color-display' style={{ background: `rgb(${r}, ${g}, ${b})` }}>
        <div className='rgb'>
          rgb({r}, {g}, {b})
        </div>
      </div>
    </>  
  );
}
