import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import './ColorDisplay.css';

function inRange(number) {
  return 0 <= number && number < 256;
}  

export default function ColorDisplay() {
  const { r, g, b } = useParams();

  if (inRange(r) && inRange(g) && inRange(b)) {
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
  } else {
    return <NotFound />; 
  }
}