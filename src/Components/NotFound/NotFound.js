import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ backgroundColor: 'aquamarine' }}>Sorry, there is no color matching that description.
      <Link to='/rgb/255/184/212' style={{ color: 'rgb(255, 184, 212)' }}> Click here to return to Pepto Bismol.</Link>
    </div>
  );
}
