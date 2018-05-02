import React from 'react';
import './Marker.css';


export const Marker = ({xPos, yPos}) => {

  let styles = {
    top: yPos,
    left: xPos
  };

  return (
    <div className='marker' style={styles}>+</div>
  );
};